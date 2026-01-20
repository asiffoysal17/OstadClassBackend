import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const encodeTOken = (email, id) => {
  const payload = { email, id };
  const key = process.env.JWT_KEY;
  const expire = process.env.JWT_EXPIRE_IN;

  return jwt.sign(payload, key, { expiresIn: expire });
};
const decodeToken = (token) => {
  try {
    const key = process.env.JWT_KEY;
    const decoded = jwt.verify(token, key);
    return decoded;
  } catch (error) {
    return null;
  }
};

const authConfig = {
  encodeTOken,
  decodeToken,
};

export default authConfig;
