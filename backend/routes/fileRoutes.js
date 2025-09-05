import express from 'express';
import { uploadFile } from '../controllers/fileController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.route("/upload").post(authMiddleware, upload.single("file"), uploadFile);

export default router;
