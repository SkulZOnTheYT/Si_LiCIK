import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import authRoutes from './routes/auth.js';
import analisisRoute from './routes/analisisRoute.js';


//import ToLiterasi from './ToLiterasi.js' -unused

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

app.set('trust proxy', 1);

// Middleware

app.use(cookieParser());
app.use(express.json());

app.use('/api/analisis', analisisRoute);


// konfigurasi CORS
app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// cek apakah environment variable sudah di-set
const requiredEnvVars = ["MONGODB_URI", "GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "SESSION_SECRET"];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`${envVar} environment variable is not set!`);
    process.exit(1); //hentikan aplikasi
  }
}

// konfigurasi
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    ttl: 14 * 24 * 60 * 60, // 14 days
    autoRemove: 'native',
  }),
  cookie: {
    secure: true,
    maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
    sameSite: 'none',
    httpOnly: true,
  },
}));

// Routes
app.use("/auth", authRoutes);

app.get("/api/user", (req, res) => {
  if (req.session.user) {
    return res.json({
      success: true,
      user: req.session.user,
    });
  }
  return res.status(401).json({
    success: false,
    message: "Not authenticated",
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    environment: process.env.NODE_ENV,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.get('/', (req, res) => {
  res.send('Halo ini backend Si LiCiK!');
});


// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

export default app;