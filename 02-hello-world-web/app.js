/*
  Como Criar Coisas Inteligentes com Arduino - Módulo 3
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      09/11/2018
  Data Atualizacao:  10/11/2018
  Descricao:         Hello World usando servidor Web
*/

// bibliotecas
var http = require ("http"); 	// servidor web
var ip = require("ip");			// saber ip da máquina

// criando um servidor web
http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World, NodeJS!');
}).listen(8080);

// mostra o endereco para ser digitado no navegador
console.log("Digite no seu navegador http://"+ ip.address() + ":8080");