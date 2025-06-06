const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'Get in Touch'
  },
  description: {
    type: String,
    required: true,
    default: 'Have questions about our careers, admissions, or training programs? Contact Shooters Academy today, and our team will assist you personally.'
    maxlength: 2000 
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  formSubtitle: {
    type: String,
    default: 'Send us a Message'
  },
  mapEmbedCode: {
    type: String,
    default: ''
  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);

