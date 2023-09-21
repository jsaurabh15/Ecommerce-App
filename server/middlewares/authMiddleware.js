import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
    try {
      const token = req.headers.authorization;
  
      if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized access" });
      }
  
      const decode = JWT.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      next();
    } catch (error) {
      console.error("JWT verification error:", error);
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }
  };

//admin access
export const isAdmin = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);
  
      if (!user) {
        return res.status(401).json({ success: false, message: "Unauthorized access" });
      }
  
      if (user.role !== 1) {
        return res.status(401).json({ success: false, message: "Unauthorized access" });
      }
  
      next();
    } catch (error) {
      console.error("isAdmin middleware error:", error);
      return res.status(401).json({ success: false, message: "Unauthorized access" });
    }
  };