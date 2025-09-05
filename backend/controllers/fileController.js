import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";
import XLSX from "xlsx";
import { File } from "../models/file.js";


// Upload Excel file + save original + parsed data
export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }


    // 1️Upload to Cloudinary
    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "excel_files", resource_type: "raw" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload();

    // Parse Excel to JSON
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    const headers = Object.keys(sheetData[0]);

    // Save both parsed data + original file link in MongoDB
    const newFile = new File({
      user: req.user.id,
      originalName: req.file.originalname,
      fileUrl: result.secure_url,
      data: sheetData,
      headers: headers,
      sheetName: sheetName
    });

    await newFile.save();

    res.status(200).json({
      message: "File uploaded successfully",
      file: newFile,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
