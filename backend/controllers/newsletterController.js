const Newsletter = require('../models/Newsletter');

const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    const existing = await Newsletter.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'Email already subscribed',
      });
    }

    const newEntry = await Newsletter.create({ email });
    res.status(200).json({
      success: true,
      message: '🎉 Subscription successful! Welcome to the Shouters Academy community — exciting updates are coming your way!',
      data: newEntry,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message,
    });
  }
};

module.exports = { subscribeNewsletter };
