#!/usr/local/bin/node
/* Manejo de eventos: evento01.js */
var eventos = require('events');
var eventoAEmitir = new eventos.EventEmitter();
var algoPasa = function () {
console.log ('¡Algo sucede!');
}
eventoAEmitir
.on('algo-sucede', algoPasa)
.emit('algo-sucede');