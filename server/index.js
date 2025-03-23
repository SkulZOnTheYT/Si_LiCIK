import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import passport from "passport"
import session from "express-session"
import cookieParser from "cookie-parser"
import GoogleStrategy from "passport-google-oauth20"
import User from './model/User.js'
import authRoutes from './routes/auth.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

const allowedOrigins = [
  "http://localhost:5173",
  "https://silicik.vercel.app",
]

//midleware
app.use(cookieParser())
app.use(express.json())

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true)

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Tidak diizinkan oleh CORS"))
      }
  },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  }
))

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your_session_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 24 jam
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
  })
)

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Cek apakah user sudah ada di database
        let user = await User.findOne({ googleId: profile.id })

        if (!user) {
          // Jika user belum ada, buat user baru
          user = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
          })
        }

        return done(null, user)
      } catch (error) {
        return done(error, null)
      }
    },
  ),
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (error) {
    done(error, null)
  }
})

//inisiasi passport.js
app.use(passport.initialize())
app.use(passport.session())

app.use("/auth", authRoutes)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/api/user", (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({
      success: true,
      user: req.user,
    })
  }
  return res.status(401).json({
    success: false,
    message: "Not authenticated",
  })
})

//error untuk cors
app.use((err, req, res, next) => {
  if (err.message === "Tidak diizinkan oleh CORS") {
    res.status(403).json({
      success: false,
      message: "CORS tidak diizinkan untuk domain ini",
    })
  } else {
    next(err)
  }
})

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mern-auth")
  .then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err)
  })

export default app