import fs from "node:fs";

fs.readdir(".", (err, files) => {
    if (err) {
        console.error(`Error al leer el directorio: ${err}`);
        return;
    }

    files.forEach( file => {
        console.log(file);
    })
})

/* Utilizando promesas
import fs from "node:fs/promises";

fs.readdir(".")
    .then(files => {
        console.log(files);
    })
    .catch(error => {
        console.log(`Error al leer el directorio: ${err}`)
    })

*/