import Comment from "../models/comment.model.js";

const createComment = async (req, res) => {
  try {
    let { name, blogID, email, comment } = req.body;
    blogID = new ObjectId(blogID);

    let data = await Comment.create({
      blogID,
      name,
      email,
      comment,
    });

    res.status(200).json({
      success: true,
      message: "Comment created successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Comment Get All
const allComment = async (req, res) => {
  try {
    let data = await Comment.find();
    res.status(200).json({
      success: true,
      message: "Comment fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Comment Get Single
const singleComment = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Comment.findById(id);
    res.status(200).json({
      success: true,
      message: "Comment fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Comment update single
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, comment } = req.body;

    let data = await Comment.findByIdAndUpdate(
      id,
      { name, email, comment },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Comment delete single
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Comment.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

const commentControllers = {
  createComment,
  allComment,
  singleComment,
  updateComment,
  deleteComment,
};
export default commentControllers;
