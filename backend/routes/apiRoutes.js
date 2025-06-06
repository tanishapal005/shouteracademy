const express = require("express");
const router = express.Router();

// Sample GET route
router.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

// Example of dynamic route
router.get("/user/:id", (req, res) => {
  res.json({ userId: req.params.id });
});


module.exports = router;

app.use('/api/aboutus', require('./routes/aboutUsRoutes'));
