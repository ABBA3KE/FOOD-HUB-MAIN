
import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String] // array of image URLs (local paths)
}, { timestamps: true });

export default mongoose.model('Food', foodSchema);
