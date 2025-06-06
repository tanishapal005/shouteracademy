// const express = require("express");
// const router = express.Router();
// const applicationController = require("../controllers/applicationController");
// const path = require("path");
// const multer = require("multer");

// // Multer storage config for uploading resume files
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/resumes");  // make sure this folder exists
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + "-" + uniqueSuffix + ext);
//   }
// });

// const upload = multer({ storage: storage });

// // POST route with file upload handling
// router.post("/", upload.single("resume"), applicationController.submitApplication);

// module.exports = router;









const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const applicationController = require("../controllers/applicationController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/resumes");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/", upload.single("resume"), applicationController.submitApplication);

module.exports = router;
