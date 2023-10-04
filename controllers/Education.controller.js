const Education = require('../models/education');

// Function to get all educations
exports.getEducations = async (req, res) => {
  try {
    const education = await Education.find(); // Get all educations
    education.sort((a, b) => (a.date < b.date ? 1 : -1)); // Sort educations by date
    res.status(200).json(education);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to create a new education
exports.createEducation = async (req, res) => {
  const education = new Education({
    university: req.body.university,
    degree: req.body.degree,
    date: req.body.date,
    awards: req.body.awards,
    courses: req.body.courses,
  });

  try {
    const savedEducation = await education.save(); // Save education to database
    res.status(200).json(savedEducation);
  } catch (err) {
    res.status(500).json({ message: "Either my database is down, or " });
  }
};
