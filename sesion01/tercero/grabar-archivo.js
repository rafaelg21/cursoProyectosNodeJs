#!/usr/local/bin/node
/* Grabar archivo: grabar-archivo.js */
var fs = require ('fs');
fs.writeFile('data.txt', '¡Hola mundo!', function (err) {
if (err) throw err;
console.log ('¡Se ha guardado!');
});
