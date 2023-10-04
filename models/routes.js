const mongoose = require('mongoose')

const routeSchema = new mongoose.Schema({
    description: String,
    url: String,
});

module.exports = mongoose.model('Route', routeSchema)