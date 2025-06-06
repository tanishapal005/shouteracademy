const multer = require("multer");
const path = require("path");

// File storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/testimonials/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Filter video files only
const fileFilter = (req, file, cb) => {
  const allowedTypes = /mp4|mov|avi|mkv/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only video files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
