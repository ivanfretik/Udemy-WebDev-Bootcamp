const fs = require('node:fs');

/*
fs.writeFile("mensaje.txt", "Hola, capos", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Archivo creado");
    }
});
*/

fs.readFile("./mensaje.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});