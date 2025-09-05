import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  originalName: { type: String },
  sheetName: { type: String },
  headers: [{ type: String }],
  data: { type: Array }, // structured excel rows
  fileUrl: { type: String, required: true }, // Cloudinary URL of original file
  uploadedAt: { type: Date, default: Date.now }
});

export const File = mongoose.model("File", fileSchema);
