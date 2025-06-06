const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  section: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Content', contentSchema);
