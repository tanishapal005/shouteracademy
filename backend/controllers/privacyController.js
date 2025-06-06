const PrivacyPolicy = require("../models/privacyModel");

// Create or update Privacy Policy
exports.updatePrivacyPolicy = async (req, res) => {
  try {
    const { content } = req.body;
    let policy = await PrivacyPolicy.findOne();

    if (!policy) {
      policy = new PrivacyPolicy({ content });
    } else {
      policy.content = content;
    }

    await policy.save();
    res.status(200).json({ message: "Privacy Policy updated", policy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Privacy Policy
exports.getPrivacyPolicy = async (req, res) => {
  try {
    const policy = await PrivacyPolicy.findOne();
    res.status(200).json(policy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
