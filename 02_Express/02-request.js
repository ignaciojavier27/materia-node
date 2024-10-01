import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
    res.sendFile(resolve("index.html"));
})

app.get("/user/:id-:name-:age", ( req, res ) => {
    res.set({
        "content-type": "text/html; charset=utf-8"
    })

    res.end(`
        <h1> ${req.params.name}, bienvenido a aplicación con Express.js<h1/>
        <h2> Tu ID es ${req.params.id} </h2>
        <h2> Tu edad es ${req.params.age} </h2>
    `)
})

app.get("/search", ( req, res ) => {
    // http://localhost:3000/search?name=ejemplo_nombre&edad=ejemplo_edad

    res.set({
        "content-type": "text/html; charset=utf-8"
    })

    res.end(`
        <h1>Hola desde search<h1/>
        <h2> Tu nombre es ${req.query.name} </h2>
        <h2> Tu edad es ${req.query.edad} </h2>
    `)
})



app.listen(3000, () => console.log("Express desde http://localhost:3000"))

