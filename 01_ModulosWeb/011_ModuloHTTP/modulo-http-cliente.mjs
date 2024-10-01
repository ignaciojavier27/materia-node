import { get } from "http";

const urlSite = {
    hostname: "www.ejemplo.com",
    port: 80,
    path: "/practica",
}

get(urlSite, (res) => {
    console.log(`El sitio ${urlSite.hostname} ha respondido. Código: ${res.statusCode}. Mensaje: ${res.statusMessage}`)
}).on("error", (err) => {
    console.error(`El sitio ${urlSite.hostname} no ha respondido. Código: ${err.Code}. Mensaje: ${err.message}`)
})