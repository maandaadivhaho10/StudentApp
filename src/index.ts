import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import studentRoutes from "./routes/studentRoutes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
