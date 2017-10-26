// libro_2.js
exports.nombre = 'Curso de NodeJS';
exports.read = function() {
console.log('Estoy leyendo las practicas del ' + exports.nombre);
}
module.exports = function() { }