const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, maxlength: 2000 },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, "Invalid email format"],
  },
 
  mapEmbedCode: { type: String, default: "" }
});

module.exports = mongoose.model("Contact", contactSchema);


