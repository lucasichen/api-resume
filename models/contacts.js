const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    github: String,
    linkedIn: String,
    resume: String,
    website: String,
});

module.exports = mongoose.model('Contacts', contactSchema)