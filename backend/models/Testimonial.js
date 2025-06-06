const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String, required: true },
  sourceType: { type: String, enum: ["youtube", "upload"], required: true }
}, { timestamps: true });

// export default mongoose.model("Testimonial", testimonialSchema);
module.exports = mongoose.model("Testimonial", testimonialSchema);
