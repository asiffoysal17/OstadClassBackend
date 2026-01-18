import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./configs/db.config.js";
import userRoutes from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* Test Route */
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

/* DB */
connectDB();

app.use("api/v1/auth", userRoutes);
app.use("api/v1/blogs", blogRoutes);

/* Server */
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
