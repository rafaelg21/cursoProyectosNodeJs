#!/usr/local/bin/node
/* Usando spawn : spawn.js */
var spawn = require('child_process').spawn;
var comando = spawn('git', ['push', 'origin', 'master']);
comando.stdout.on('data', function (data) {
 console.log('stdout: ' + data);
});
comando.stderr.on('data', function (data) {
 console.log('stderr: ' + data);
});
comando.on('close', function (codigo) {
    console.log('EL proceso fue abortado reportando el código ' + codigo);
   });
   