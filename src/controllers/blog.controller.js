import Blog from "../models/blog.model.js";

const createBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const result = await Blog.create(blogData);

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.toString(),
    });
  }
};
const allBlog = async (_, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Failed to fetch blogs",
    });
  }
};
const singleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findOne(id);
    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Failed to fetch blogs",
    });
  }
};
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, img, category, description, short_description } = req.body;
    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        title,
        img,
        category,
        description,
        short_description,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Failed to update blogs",
    });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Failed to delete blogs",
    });
  }
};

const blogController = {
  createBlog,
  allBlog,
  singleBlog,
  updateBlog,
  deleteBlog,
};

export default blogController;
