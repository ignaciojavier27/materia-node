import express from 'express';

const app = express();
app.disable('x-powered-by');

app.get('/', ( req, res ) => {
    res.json({ mensaje: 'Hola Mundo' })
})

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto http://localhost:${PORT}`)
})