const Project = require('../models/project');

// Function to get projects
exports.getProjects = async (req, res) => {
  try {
    const project = await Project.find(); // Get all projects
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function to create a new project
exports.createProject = async (req, res) => {
  // Create a new project
  const project = new Project({
    title: req.body.title,
    techStack: req.body.techStack,
    description: req.body.description,
    github: req.body.github,
    live: req.body.live,
  });

  try {
    const savedProject = await project.save(); // Save project to the database
    res.status(200).json(savedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
