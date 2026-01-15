import User from "../models/user.model.js";

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Registration failed ${error}`,
    });
  }
};

const login = async (req, res) => {};

const userController = {
  register,
  login,
};

export default userController;
