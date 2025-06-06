// models/About.js
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false }
});

const impactSchema = new mongoose.Schema({
  youtube: { type: String, required: false },
  students: { type: String, required: false },
  trainings: { type: String, required: false },
  rating: { type: String, required: false }
});

const aboutSchema = new mongoose.Schema({
  journeyTitle: { type: String, required: true },
  journeyContent: { type: String, required: true },
  imageUrl: { type: String, required: false },
  cards: [cardSchema],
  impact: impactSchema
});

module.exports = mongoose.model('About', aboutSchema);
