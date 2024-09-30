import { basename, dirname, extname } from "path";

const ruta = "/ruta/principal/archivo.txt";

const archivo = basename(ruta);
const directorio = dirname(ruta);
const extension = extname(ruta);

console.log("Nombre archivo:", archivo) // archivo.txt
console.log("Directorio:", directorio) // /ruta/principal
console.log("Extension:", extension) // .txt