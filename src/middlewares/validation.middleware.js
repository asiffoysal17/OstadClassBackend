import authConfig from "../configs/auth.config.js";

export const validateUser = (req, res, next) => {
  const token = req.cookies("user?-token");

  const decodedToken = authConfig.decodeToken(token);

  if (!decodedToken) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized access",
    });
  } else {
    req.headers.email = decodedToken("email");
    req.headers._id = decodedToken("id");
    next();
  }
};
