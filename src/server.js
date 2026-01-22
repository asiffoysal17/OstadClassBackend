import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.config.js";
import advantageRoutes from "./routes/advantage.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import commentRoutes from "./routes/comment.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import educationRoutes from "./routes/education.routes.js";
import experienceRoutes from "./routes/experience.routes.js";
import fileRoutes from "./routes/file.routes.js";
import portfolioRoutes from "./routes/portfolio.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import testimonialRoutes from "./routes/testimonial.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/advantages", advantageRoutes);
app.use("/api/v1/testimonials", testimonialRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/files", fileRoutes);
app.use("/api/v1/experiences", experienceRoutes);
app.use("/api/v1/portfolios", portfolioRoutes);
app.use("/api/v1/services", serviceRoutes);
app.use("/api/v1/education", educationRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend Server is Running...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
