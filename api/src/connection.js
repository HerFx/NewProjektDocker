const mongoose = require('mongoose');
const Movie = require('./Movie.model');

const connection = 'mongodb://mongo:27017/movies';

const connectDb = () => {
    return mongoose.connect(connection);
}

module.exports = connectDb;
