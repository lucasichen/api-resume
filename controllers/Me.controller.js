const Contacts = require('../models/contacts');
const Education = require('../models/education');
const Experience = require('../models/experience');
const Project = require('../models/project');
const Me = require('../models/me');

// Function to get the combined resume
exports.getMe = async (req, res) => {
  try {
    // Fetch data from other models
    const contacts = await Contacts.find();
    const education = await Education.find().sort({ date: -1 });
    const experience = await Experience.find().sort({ date: -1 });
    const projects = await Project.find();

    // Combine the data into a single resume object
    const me = {
      contact: contacts,
      education: education,
      experience: experience,
      projects: projects,
    };

    res.status(200).json(me);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
