const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Category", categorySchema);
