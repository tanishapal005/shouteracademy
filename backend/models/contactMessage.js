const mongoose = require('mongoose');

const contactMessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  issueType: String,
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ContactMessage', contactMessageSchema);
