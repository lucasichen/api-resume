const {connect, connection} = require('mongoose')
require('dotenv').config()


const uri = `mongodb+srv://lucasichen:${process.env.API_PASSWORD}@cluster0.ubguh7c.mongodb.net/?retryWrites=true&w=majority`;

const connectionString = uri || 'mongodb://localhost:3000/resume';

connect(connectionString, {
    useNewURLParser: true,
    useUnifiedTopology:true,
});

module.exports = connection