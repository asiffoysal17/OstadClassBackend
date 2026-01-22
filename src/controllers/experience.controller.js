import Experience from "../models/experience.model.js";

const createExperience = async (req, res) => {
  try {
    const { title, company, description, time } = req.body;

    let data = await Experience.create({
      title,
      company,
      description,
      time,
    });
    res.status(200).json({
      success: true,
      message: "Experience created successfully",
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

//! Experience Get All
const allExperience = async (req, res) => {
  try {
    let data = await Experience.find();
    res.status(200).json({
      success: true,
      message: "Experience created successfully",
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

//! Experience Get Single
const singleExperience = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Experience.findById(id);
    res.status(200).json({
      success: true,
      message: "Experience fetched successfully",
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

//! Experience update single
const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company, description, time } = req.body;

    let data = await Experience.findByIdAndUpdate(
      id,
      { title, company, description, time },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Experience updated successfully",
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

//! Experience delete single
const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Experience.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Experience deleted successfully",
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

const experienceControllers = {
  createExperience,
  allExperience,
  singleExperience,
  updateExperience,
  deleteExperience,
};
export default experienceControllers;
