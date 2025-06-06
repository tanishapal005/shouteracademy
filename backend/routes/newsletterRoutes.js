const express = require('express');
const router = express.Router();

// ✅ Correct CommonJS import
const { subscribeNewsletter } = require('../controllers/newsletterController');

// ✅ Define the route properly
router.post('/subscribe', subscribeNewsletter);

module.exports = router;
