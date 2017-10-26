#!/usr/local/bin/node
/* Leer archivo: leer-archivo.js */
var fs = require ('fs');
fs.readFile('data.txt', function (err, data) {
if (err) throw err;
console.log ('Resultado TXT=' + data.toString ());
});
