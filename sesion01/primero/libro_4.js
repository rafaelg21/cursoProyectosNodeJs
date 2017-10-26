// libro_4.js
module.exports = function() {
    var misPuntos = 0;
    return {
     puntos: function(puntos_param) {
     misPuntos = puntos_param;
     },
     getPuntos: function() {
     return misPuntos;
     }
    }
}
    