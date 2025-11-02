import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import morgan from "morgan";
import errorHandler from "./utils/errorHandler";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Health check route
app.get("/health", (_req, res) => {
  res.status(200).json({ status: "UP" });
});

app.use(errorHandler);

// MongoDB connection
const connectDB = async () => {
  console.log("🔄 Attempting MongoDB connection...");
  console.log("🧩 MONGO_URI:", process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ MongoDB Connected");
    console.log("🚀 Database connected successfully");
  } catch (err) {
    console.error("❌ DB Connection Failed:", err);
    process.exit(1);
  }
};

// Start server only after DB connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
