const ContactMessage = require('../models/contactMessage');

// @desc    Submit new contact message
// @route   POST /api/contact-messages
// @access  Public
async function submitContactMessage(req, res) {
  try {
    const { name, email, phone, message, issueType } = req.body;

    const newMessage = new ContactMessage({
      name,
      email,
      phone,
      message,
      issueType
    });

    await newMessage.save();
    res.status(201).json({ success: true, message: "Message submitted successfully!" });

  } catch (err) {
    console.error("Error saving contact message:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
}

module.exports = {
  submitContactMessage
};
