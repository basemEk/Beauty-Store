import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SEC, {
    expiresIn: "10d",
  });

  //put the token inside the cookie
  res.cookie("jwt", token, {
    httpOnly: true,                                     // The cookie is not accessible via client-side JavaScript
    secure: process.env.NODE_ENV !== "development",     // Use secure cookies in production
    sameSite: "strict",                                 // Prevents CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000,                   // Cookie expiration in milliseconds
  });
};

export default generateToken;
