const mongoose = require('mongoose')

const eductionSchema = new mongoose.Schema({
    university: String,
    degree: String,
    date: String,
    awards: Array,
    courses: Array,

});

module.exports = mongoose.model('Education', eductionSchema)