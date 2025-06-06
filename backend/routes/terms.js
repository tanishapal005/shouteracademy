// routes/termsRoutes.js
const express = require('express');
const router = express.Router();
const Terms = require('../models/termsModel');

// GET terms
router.get('/', async (req, res) => {
  try {
    const terms = await Terms.findOne();
    res.json(terms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch terms' });
  }
});

// PUT update terms
router.put('/', async (req, res) => {
  const { section1Title, section1Content, section2Title, section2Content } = req.body;

  try {
    let terms = await Terms.findOne();
    if (terms) {
      terms.section1Title = section1Title;
      terms.section1Content = section1Content;
      terms.section2Title = section2Title;
      terms.section2Content = section2Content;
      await terms.save();
    } else {
      terms = await Terms.create({
        section1Title,
        section1Content,
        section2Title,
        section2Content,
      });
    }
    res.json(terms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update terms' });
  }
});

module.exports = router;
