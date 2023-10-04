const Experience = require('../models/experience');

// Function to get all experiences
exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find(); // Get all experiences
    experiences.sort((a, b) => (a.date < b.date ? 1 : -1)); // Sort experiences by date
    res.status(200).json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to create a new experience
exports.createExperience = async (req, res) => {
  const experience = new Experience({
    title: req.body.title,
    company: req.body.company,
    date: req.body.date,
    description: req.body.description,
  });

  try {
    const savedExperience = await experience.save(); // Save experience to the database
    res.status(200).json(savedExperience);
  } catch (err) {
    res.status(500).json({ message: 'Either my database is down, or you are trying to give me a job... :)' });
  }
};
