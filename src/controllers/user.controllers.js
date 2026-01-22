import authConfig from "../configs/auth.config.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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

const login = async (req, res) => {
  try {
    // get email and password from request body
    const { email, password } = req.body;
    // find if the user exists in the database using the email
    const user = await User.findOne({ email });
    // user is not in database => throw error
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // user in database => match the password
    const isMatched = await bcrypt.compare(password, user.password);
    // password does not match => throw error
    if (!isMatched) {
      return res.status(404).json({
        success: false,
        message: "Password is incorrect",
      });
    } else {
      // password match => token generate (JWT)
      const token = authConfig.encodeTOken(user?.email, user?._id?.toString());
      // store the token in a cookie
      res.cookie("user-token", token);
      // return response to the frontend
      return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        user: {
          id: user._id,
          email: user.email,
        },
        token: token,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.toString(),
    });
  }
};

const userLogout = async (req, res) => {
  try {
    res.clearCookie("user-token");
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.toString(),
    });
  }
};

const userController = {
  register,
  login,
};

export default userController;
