const express = require("express");
const router = express.Router();
const { updatePrivacyPolicy, getPrivacyPolicy } = require("../controllers/privacyController");

// ✅ Remove `/privacy` from here — keep it root level
router.put("/", updatePrivacyPolicy);
router.get("/", getPrivacyPolicy);

module.exports = router;
