#!/usr/local/bin/node
/* Obtener el listado de archivos de un directorio: ls.js */
var exec = require('child_process').exec;
/* Para Linux o Mac OS */
/* exec('ls -l', function(error, stdout, stderr) { */
/* Para Windows */
exec('dir', function(error, stdout, stderr) {
 console.log('stdout: ' + stdout);
 console.log('stderr: ' + stderr);
 if (error !== null) {
 console.log('Error: ' + error);
 }
});
