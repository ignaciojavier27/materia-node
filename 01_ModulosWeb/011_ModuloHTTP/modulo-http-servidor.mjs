import { createServer } from "http";

const servidor = createServer( (req, res) => {
    // res.writeHead(200, {"Content-Type": "text/plain"});
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end("<h1>Hola mundo!!<h1/>");
});

servidor.listen(3000, "127.0.0.1", () => {
    console.log("Servidor iniciado");
})