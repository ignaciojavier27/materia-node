import { resolve } from "path";

const rutaRelativa = "./subcarpeta/archivo.txt";

const rutaAbsoluta = resolve(rutaRelativa);

console.log("Ruta absoluta: ", rutaAbsoluta)