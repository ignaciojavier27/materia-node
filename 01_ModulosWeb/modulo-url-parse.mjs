import { parse } from "url";

const url = "https://www.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2";

const parsedUrl = parse(urlString, true);

console.log("Protocolo:", parsedUrl.protocol) // https
console.log("Hostname:", parsedUrl.hostname) // www.ejemplo.com
console.log("Pathname:", parsedUrl.pathname) // /ruta
console.log("Parámetros de consulta:", parsedUrl.query) // { parametro1: 'valor1', parametro2: 'valor2' }
