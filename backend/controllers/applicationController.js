const Application = require("../models/Application");

exports.submitApplication = async (req, res) => {
  try {
    const { fullName, email, phone, linkedin, coverLetter } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Resume file is required." });
    }

    const newApplication = new Application({
      fullName,
      email,
      phone,
      linkedin,
     resume: req.file.filename,
      coverLetter
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully." });
  } catch (err) {
    console.error("Error submitting application:", err);
    res.status(500).json({ message: "Server error." });
  }
};
