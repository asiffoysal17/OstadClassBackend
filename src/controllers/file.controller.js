import File from "../models/file.model.js";

const fileUpload = async (req, res) => {
  try {
    const filename = req.file.path;
    console.log("File Name", filename);
    const data = await File.create({ filename });
    res.status(201).json({
      success: true,
      message: "File Uploads successfully",
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

const fileControllers = { fileUpload };
export default fileControllers;
