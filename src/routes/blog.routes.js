import express from "express";
import blogController from "../controllers/blog.controller.js";
import upload from "../configs/multer.config.js";
import { validateUser } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post(
  "/create-blog",
  validateUser,
  upload.single("imag"),
  blogController.createBlog,
);
router.get("/all-blogs", validateUser, blogController.allBlog);
router.get("/:id", validateUser, blogController.singleBlog);
router.put("/update-blog", validateUser, blogController.updateBlog);
router.delete("/delete-blog", validateUser, blogController.deleteBlog);

export default router;
