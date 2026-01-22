//! Testimonial create
const createTestimonial = async (req, res) => {
  try {
    const { clientName, address, img, feedback } = req.body;

    let data = await Testimonial.create({
      clientName,
      address,
      img,
      feedback,
    });
    res.status(200).json({
      success: true,
      message: "Testimonial created successfully",
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

//! Testimonial Get All
const allTestimonial = async (req, res) => {
  try {
    let data = await Testimonial.find();
    res.status(200).json({
      success: true,
      message: "Testimonial fetched successfully",
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

//! Testimonial Get Single
const singleTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Testimonial.findById(id);
    res.status(200).json({
      success: true,
      message: "Testimonial fetched successfully",
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

//! Testimonial update single
const updateTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const { clientName, address, img, feedback } = req.body;

    let data = await Testimonial.findByIdAndUpdate(
      id,
      { clientName, address, img, feedback },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
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

//! Testimonial delete single
const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await Testimonial.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
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

const testimonialControllers = {
  createTestimonial,
  allTestimonial,
  singleTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
export default testimonialControllers;
