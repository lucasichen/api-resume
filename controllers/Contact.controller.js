const Contacts = require('../models/contacts');

// Function to get contacts
exports.getContacts = async (req, res) => {
  try {
    const contact = await Contacts.find(); // Get all contacts
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to update contacts
exports.updateContacts = async (req, res) => {
  try {
    // Find the existing contact by a unique identifier, such as email
    let existingContact = await Contacts.findOne();
    if (existingContact) {
      existingContact.set(req.body);
      const updatedContact = await existingContact.save();
      res.status(200).json(updatedContact);
    } else {
      existingContact = new Contacts({
        name: req.body.name,
        email: req.body.email,
        github: req.body.github,
        linkedIn: req.body.linkedIn,
        resume: req.body.resume,
        website: req.body.website,
      });
      const newContact = await existingContact.save();
      res.status(200).json(newContact);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
