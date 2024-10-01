import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", ( req, res ) => {
    res.set({
        "content-type": "text/html; charset=utf-8"
    })
    res.sendFile(resolve("index.html"))
})

app.get("/json", ( req, res ) => {
    res.json({
        nombre: "Ignacio",
        edad: 21,
        instagram: "https://www.instagram.com/ignacioo.js"
    })
});

app.get("/index", ( req, res ) => {
    res.sendFile(resolve("index.html"))
});

app.get("/ignacio", ( req, res ) => {
    res.redirect(301, "/")
});

app.listen(3000, () => console.log("Express desde http://localhost:3000"));
