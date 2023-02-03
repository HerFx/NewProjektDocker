const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const Movie = require("./src/Movie.model");
const cors = require("cors");


app.use(cors());


const PORT = 8080;

app.use(express.json());

app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
})

app.post('/movies', async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.json(movie);
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
})


app.delete('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        res.json(movie);
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
})

app.get('/movies/random', async (req, res) => {
    try {
        const count = await Movie.countDocuments();
        const random = Math.floor(Math.random() * count);
        const movie = await Movie.findOne().skip(random);
        res.json(movie);
    } catch (err) {
        console.log(`Error: ${err.message}`)
    }
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDb().then(() => {
        console.log('MongoDB connected!');
    });
});







