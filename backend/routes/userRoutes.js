import express from "express";
import { login, register } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/register").post(register, authMiddleware);
router.route("/login").post(login);

export default router;