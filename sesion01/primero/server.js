'use strict'
// Importamos la libreria http 
var http = require('http');
// Creamos el servidor
http.createServer(function (request, response) {
    //Configuramos el encabezado de la página para enviar texto plano al Navegador
    response.writeHead(200, {'Content-Type': 'text/html'});
    //Enviamos el texto: Hola mundo
    response.end('<h1>Hola Mundo</h1>');
}).listen(9000, '127.0.0.1'); // Llamaremos al método listen indicando puerto e ip
// Puede ver en la console de Windows que hemos iniciado el servidor
console.log('Servidor ejecutando en http://127.0.0.1:9000/');
