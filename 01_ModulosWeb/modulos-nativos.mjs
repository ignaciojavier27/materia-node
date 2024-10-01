import os from 'node:os';

console.log("Sistema operativo :", os.platform());
console.log("Versión del sistema operativo :", os.release());
console.log("Memoria disponible :", os.freemem());
console.log("Memoria total :", os.totalmem());
console.log("Disco disponible :", os.freemem());
console.log("CPUs: ", os.cpus());
console.log("Arquitectura: ", os.arch())
console.log("Uptime: ", os.uptime()/60/60/24)