




// models/User.js
const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  education: String,
  course: String,
});

module.exports = mongoose.model('User', mentorSchema);
