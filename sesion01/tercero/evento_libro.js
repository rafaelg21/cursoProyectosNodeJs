#!/usr/local/bin/node
/* Definicion del evento de calificacion del libro: evento_libro.js */
var util = require("util");
var eventos = require("events");
var Class = function() { };
util.inherits(Class, eventos.EventEmitter);

Class.prototype.puntos = 0;
Class.prototype.calificar = function(puntos_param) {
    puntos = puntos_param;
    this.emit('Calificado un libro');
};

Class.prototype.getPuntos = function() {
 return puntos;
}
module.exports = Class;
