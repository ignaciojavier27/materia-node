import express from 'express';
import movies from './movies.json' assert { type: 'json' };


const app = express();
app.disable('x-powered-by');

const PORT = process.env.PORT ?? 1234;

app.get('/', ( req, res ) => {
    res.json({ mensaje: 'Hola Mundo' })
});

app.get('/movies', ( req, res ) => {
    res.json({ movies })
});

app.get('/movies/:id', ( req, res ) => {
    const { id } = req.params;
    const movie = movies.find(movie => movie.id === id);

    if(movie) return res.json(movie)

    res.status(404).json({ message : 'Película no encontrada.'})

});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto http://localhost:${PORT}`)
})