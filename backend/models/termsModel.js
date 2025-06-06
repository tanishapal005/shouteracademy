const mongoose = require('mongoose');

const termsSchema = new mongoose.Schema({
  section1Title: String,
  section1Content: String,
  section2Title: String,
  section2Content: String,
});

module.exports = mongoose.model('Terms', termsSchema);
