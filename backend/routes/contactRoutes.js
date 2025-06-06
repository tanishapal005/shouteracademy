const express = require("express");
const router = express.Router();
const { getContact, saveContact } = require("../controllers/contactController");

router.get("/", getContact);           // GET /api/contact
router.post("/", saveContact);        // POST /api/contact

module.exports = router;


// Express route example

