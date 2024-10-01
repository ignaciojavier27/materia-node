import fs from "node:fs/promises";

const text = await fs.readFile( "./archivo.txt", "utf-8" );

console.log(text);