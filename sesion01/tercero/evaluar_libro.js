#!/usr/local/bin/node
/* Evaluar libro: evaluar_libro.js */
var LibroClass = require('./evento_libro.js');
var libro = new LibroClass();
 libro.on('Calificado un libro', function() {
 console.log('Calificado con ' + libro.getPuntos());
});
/*
 Obtener la calificación por parámetro en la consola o terminal usaremos
 process.argv, el mismo devuelve:
 0 : es node
 1 : La app desktop, en nuestro caso evaluar_libro.js
 2 : La calificación del libro
*/
var calificacion = process.argv.slice(2);
libro.calificar(calificacion);