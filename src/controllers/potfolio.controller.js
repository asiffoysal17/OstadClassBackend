import Portfolio from "../models/portfolio.model.js";

const createPortfolio = async (req, res) => {
  try {
    const { title, link, category } = JSON.parse(req.body.data);
    console.log("Data", req.body.data);
    const img = req.file.path;
    let data = await Portfolio.create({
      title,
      img,
      link,
      category,
    });
    res.status(200).json({
      success: true,
      message: "Portfolio created successfully",
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

//! Portfolio Get All
const allPortfolio = async (req, res) => {
  try {
    let data = await Portfolio.find();
    res.status(200).json({
      success: true,
      message: "Portfolio fetched successfully",
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

//! Portfolio Get Single

const singlePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Portfolio.findById(id);
    res.status(200).json({
      success: true,
      message: "Portfolio fetched successfully",
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

//! Portfolio update single
const updatePortfolio = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, img, link, category } = req.body;

    let data = await Portfolio.findByIdAndUpdate(
      id,
      { title, img, link, category },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Portfolio updated successfully",
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

//! Portfolio delete single
const deletePortfolio = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Portfolio.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Portfolio deleted successfully",
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

const portfolioControllers = {
  createPortfolio,
  allPortfolio,
  singlePortfolio,
  updatePortfolio,
  deletePortfolio,
};
export default portfolioControllers;
