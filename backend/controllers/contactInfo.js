// controllers/contactController.js
const Contact = require("../models/contactInfo");

// 🔹 GET contact info
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne(); // only one doc
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contact data", err });
  }
};

// 🔹 UPDATE or CREATE contact info
exports.saveContact = async (req, res) => {
  try {
    let contact = await Contact.findOne();

    if (contact) {
      // update existing
      contact.set(req.body);
      await contact.save();
    } else {
      // create new
      contact = new Contact(req.body);
      await contact.save();
    }

    res.status(200).json({ message: "Contact info saved successfully", contact });
  } catch (err) {
    res.status(500).json({ message: "Error saving contact info", err });
  }
};
