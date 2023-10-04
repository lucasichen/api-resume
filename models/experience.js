const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
    title: String,
    company: String,
    date: String,
    description: String,
});

module.exports = mongoose.model('Experience', experienceSchema)