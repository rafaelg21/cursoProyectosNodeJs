// app1.js
var libro1 = require('./libro_4.js')();
var libro2 = require('./libro_4.js')();
libro1.puntos(10);
libro2.puntos(20);
// La logica indica que debería imprimir 10 20, pero obtenemos 20 20.
console.log(libro1.getPuntos(), libro2.getPuntos());