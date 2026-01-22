import Education from "../models/education.model.js";

const createEducation = async (req, res) => {
  try {
    const { title, institute, description, time } = req.body;

    let data = await Education.create({
      title,
      institute,
      description,
      time,
    });
    res.status(200).json({
      success: true,
      message: "Education created successfully",
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

//! Education Get All
const allEducation = async (req, res) => {
  try {
    let data = await Education.find();
    res.status(200).json({
      success: true,
      message: "Education fetched successfully",
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

//! Education Get Single
const singleEducation = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Education.findById(id);
    res.status(200).json({
      success: true,
      message: "Education fetched successfully",
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

//! Education update single
const updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, institute, description, time } = req.body;

    let data = await Education.findByIdAndUpdate(
      id,
      { title, institute, description, time },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Education updated successfully",
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

//! Education delete single
const deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Education.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Education deleted successfully",
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

const educationControllers = {
  createEducation,
  allEducation,
  singleEducation,
  updateEducation,
  deleteEducation,
};
export default educationControllers;
