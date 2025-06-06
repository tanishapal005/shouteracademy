const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  primaryButtonText: String,
  secondaryButtonText: String
});

const heroSectionSchema = new mongoose.Schema({
  slides: [slideSchema] // 👈 yeh important hai
});

module.exports = mongoose.model('HeroSection', heroSectionSchema);
