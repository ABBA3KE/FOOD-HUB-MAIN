
import express from "express";
import multer from "multer";
import { uploadImages } from "../controllers/uploadController.js";
const router = express.Router();

// Ensure upload directory exists
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'server/uploads/foods');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/upload', upload.array('images', 8), uploadImages);

export default router;
