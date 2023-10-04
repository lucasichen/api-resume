const mongoose = require('mongoose')

const routeSchema = new mongoose.Schema({
    routes: Array,
});

module.exports = mongoose.model('Route', routeSchema)