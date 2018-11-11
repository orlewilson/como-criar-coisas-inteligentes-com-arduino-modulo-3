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

// criando um servidor
http.createServer(function (req, res) {
    
    // informando o tipo de conteúdo
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // mostrar uma mensagem
    res.end('Hello World, Orlewilson! Welcome to NodeJS!');

// porta na qual o servidor estará escutando
}).listen(8080); 

// mensagem no console
console.log("Digite no seu navegador http://"+ ip.address() + ":8080");