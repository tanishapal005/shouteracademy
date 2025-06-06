const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true },
  linkedin: { type: String, default: "" },
  resume: { type: String, required: true },
  coverLetter: { type: String, default: "" },
  appliedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
