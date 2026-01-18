import express from "express";
import blogController from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/create-blog", blogController.createBlog);
router.get("/all-blog", blogController.allBlog);
router.get("/:id", blogController.singleBlog);
router.put("/update-blog", blogController.updateBlog);
router.delete("/delete-blog", blogController.deleteBlog);

export default router;
