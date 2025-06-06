const Testimonial = require("../models/Testimonial");

exports.addTestimonial = async (req, res) => {
  try {
    const { name, description, sourceType } = req.body;
    let videoUrl = req.body.videoUrl;
    let videoFileUrl = null;

    if (sourceType === "file" && req.file) {
      videoFileUrl = `/uploads/testimonials/${req.file.filename}`;
    }

    const newTestimonial = new Testimonial({
      name,
      description,
      sourceType,
      videoUrl: sourceType === "url" ? videoUrl : null,
      videoFileUrl,
    });

    await newTestimonial.save();
    res.status(201).json({ message: "Testimonial added successfully" });
  } catch (error) {
    console.error("Error adding testimonial:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(500).json({ message: "Error fetching testimonials", error: err });
  }
};
