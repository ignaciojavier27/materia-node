import { createServer } from "http";

const servidor = createServer( (req, res) => {

    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>Home!<h1/>");
    }else if(req.url === "/contacto"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>Contacto!<h1/>");
    }else if(req.url === "/nosotros"){
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>Nosotros!<h1/>");
    }else{
        res.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
        res.end("<h1>Error 404!<h1/>");
    }

    // res.writeHead(200, {"Content-Type": "text/plain"});
});

servidor.listen(3000, "127.0.0.1", () => {
    console.log("Servidor iniciado");
})