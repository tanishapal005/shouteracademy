
const { submitContactMessage } = require('../controllers/contactMessages');
const express = require("express");
const router = express.Router();

// POST /api/contact
router.post('/', submitContactMessage);
router.get('/', (req, res) => {
  res.send('Hello from terms route');
});

module.exports = router;


