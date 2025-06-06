// routes/slider.js
const express = require('express');
const router = express.Router();
const Slider = require('../models/HeroSlide');

// GET - Home page frontend ke liye
router.get('/', async (req, res) => {
  const slider = await Slider.findOne(); // ek hi slider document use karenge
  res.json(slider);
});

router.put('/', async (req, res) => {
  try {
    const { slides } = req.body;
    let slider = await Slider.findOne();

    if (!slider) {
      slider = new Slider({ slides });
    } else {
      slider.slides = slides;
    }

    await slider.save();
    res.json({ message: 'Slider updated successfully' });
  } catch (err) {
    console.error("❌ Failed to update hero section:", err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});



module.exports = router;
