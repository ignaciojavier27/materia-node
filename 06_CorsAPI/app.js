import express from 'express';
import movies from './movies.json' assert { type: 'json' };
import crypto from 'node:crypto';
import { validateMovie, validatePartialMovie } from './schemas/movies.js';


const app = express();

app.use(express.json())
app.disable('x-powered-by');

const PORT = process.env.PORT ?? 1234;


app.get('/', ( req, res ) => {
    res.json({ mensaje: 'Hola Mundo' })
});

app.get('/movies', ( req, res ) => {
    res.header('Access-Control-Allow-Origin', '*')

    const { genre } = req.query;

    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(
                g => g.toLocaleLowerCase() === genre.toLowerCase()
            )
        )
        return filteredMovies
    }

    res.json({ movies })
});

app.get('/movies/:id', ( req, res ) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);

    if(movie) return res.json(movie)

    res.status(404).json({ message : 'Película no encontrada.'})

});

app.post('/movies', ( req, res ) => {

    const result = validateMovie(req.body)

    if(result.error){
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newMovie = {
        id: crypto.randomUUID(),
        ...result.data
    };

    movies.push(newMovie);

    res.status(201).json(newMovie);
})


app.patch('/movies/:id', ( req, res ) => {
    const { id } = req.params;

    const result = validatePartialMovie(req.body);

    if(!result.success) return res.status(400).json({ error: JSON.parse(result.error.message)})

    const movieIndex = movies.findIndex(movie => movie.id === id);

    if(movieIndex === -1) return res.status(404).json({ message: 'Movie not found. Try with another title' })
    
    const updateMovie = {
        ...movies[movieIndex],
        ...result.data
    }

    movies[movieIndex] = updateMovie;

    return res.status(200).json(updateMovie);
    
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto http://localhost:${PORT}`)
})