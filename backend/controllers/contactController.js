const Contact = require("../models/contactModel");

// GET contact info
exports.getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: "Error fetching contact data", err });
  }
};

// CREATE or UPDATE contact info
exports.saveContact = async (req, res) => {
  try {
    console.log("Incoming POST body: ", req.body);
    let contact = await Contact.findOne();

    if (contact) {
      contact.set(req.body);
      await contact.save();
    } else {
      contact = new Contact(req.body);
      await contact.save();
    }

    res.status(200).json({ message: "Contact info saved successfully", contact });
  } catch (err) {
    console.error("POST error:", err);
    res.status(500).json({ message: "Error saving contact info", err });
  }
};
