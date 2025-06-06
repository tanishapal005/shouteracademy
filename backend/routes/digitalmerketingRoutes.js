const express = require('express');
const router = express.Router();
const {
  getContent,
  updateContent,
  createContent,
} = require('../controllers/contentController');

router.get('/:section', getContent);
router.put('/:section', updateContent);
router.post('/', createContent); // POST /api/content

module.exports = router;
                                                    