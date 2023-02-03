const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    movieType: {
        type: String,
    },
    whereToWatch: {
        type: String
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;