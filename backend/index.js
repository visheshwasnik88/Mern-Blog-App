import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("db connected successfully");
});
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
