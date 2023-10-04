const mongoose = require('mongoose');

const meSchema = new mongoose.Schema({
  contact: Object,
  education:Array,
  experience: Array,
  projects: Array,
});

module.exports = mongoose.model('Me', meSchema);
