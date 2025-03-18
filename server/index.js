import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()
const app = express()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("MongoDB Connected...")
  } catch (err) {
    console.error("MongoDB connection error:", err.message)
    process.exit(1)
  }
}

connectDB()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API Is Running...")
})

app.use("/api", userRoutes)

const PORT = process.env.PORT || 5000
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}

export default app
