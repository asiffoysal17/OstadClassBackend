import Advantage from "../models/advantage.model.js";

const createAdvantage = async (req, res) => {
  try {
    const { title, category, percent, time } = req.body;

    let data = await Advantage.create({
      title,
      category,
      percent,
      time,
    });
    res.status(200).json({
      success: true,
      message: "Advantage created successfully",
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

//! Advantage Get All
const allAdvantage = async (req, res) => {
  try {
    let data = await Advantage.find();
    res.status(200).json({
      success: true,
      message: "Advantage fetched successfully",
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

//! Advantage Get Single
const singleAdvantage = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Advantage.findById(id);
    res.status(200).json({
      success: true,
      message: "Advantage fetched successfully",
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

//! Advantage update single
const updateAdvantage = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category, percent, time } = req.body;

    let data = await Advantage.findByIdAndUpdate(
      id,
      { title, category, percent, time },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Advantage updated successfully",
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

//! Advantage delete single
const deleteAdvantage = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Advantage.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Advantage deleted successfully",
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

const advantageControllers = {
  createAdvantage,
  allAdvantage,
  singleAdvantage,
  updateAdvantage,
  deleteAdvantage,
};
export default advantageControllers;
