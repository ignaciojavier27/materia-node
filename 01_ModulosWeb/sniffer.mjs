import { createServer, get } from "http";

const hostname = "localhost",
      port = 3000,
      options = {
        host: "www.ejemplo.com",
        port: 80,
        path: "/practica",
      };

let htmlCode = "";

const httpClient = res => {
    console.log(`El sitio ${options.host} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}`);

    res.on("data", data => {
        htmlCode += data;
        console.log(data, data.toString());
    });
}

const httpError = err => {
    console.error(`El sitio ${options.host} no ha respondido. Código: ${err.code}. Mensaje: ${err.message}`);
}

const webServer = (req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(htmlCode);
}

get( options, httpClient ).on("error", httpError );

createServer(webServer).listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
})