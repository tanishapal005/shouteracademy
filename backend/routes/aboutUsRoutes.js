const express = require('express');
const router = express.Router();
const { getAbout, createAbout, updateAbout } = require('../controllers/aboutUsController');

router.get('/', getAbout);
router.post('/', createAbout);
router.put('/', updateAbout);

module.exports = router;
