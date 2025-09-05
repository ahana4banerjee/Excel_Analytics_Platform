import multer from "multer";

// Use memory storage, so file is not saved locally
const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
