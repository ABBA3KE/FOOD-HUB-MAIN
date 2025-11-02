
export const uploadImages = (req, res) => {
  // files stored by multer; return array of paths
  const imageUrls = req.files.map(file => `/uploads/foods/${file.filename}`);
  res.status(200).json({ message: 'Images uploaded', imageUrls });
};
