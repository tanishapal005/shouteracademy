const AboutModel = require('../models/AboutUs');

// GET About Us data
const getAbout = async (req, res) => {
  try {
    const about = await AboutModel.findOne();
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching About data', error });
  }
};

// POST - Create About Us data
const createAbout = async (req, res) => {
  try {
    const about = new AboutModel(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    res.status(500).json({ message: 'Error creating About data', error });
  }
};

// PUT - Update About Us data
const updateAbout = async (req, res) => {
  try {
    const updated = await AboutModel.findOneAndUpdate({}, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating About data', error });
  }
};

module.exports = {
  getAbout,
  createAbout,
  updateAbout
};

