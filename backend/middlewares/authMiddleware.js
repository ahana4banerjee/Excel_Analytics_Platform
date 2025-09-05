import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // First try cookies
    let token = req.cookies?.token;

    // If not in cookies, try Authorization header
    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      }
    }

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = await jwt.verify(token, process.env.SECRET_KEY);

    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    req.user = { id: decode.userId }; 
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error in auth middleware",
      success: false,
    });
  }
};

export default authMiddleware;
