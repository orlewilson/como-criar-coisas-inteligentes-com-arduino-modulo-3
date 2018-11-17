/*
  Como Criar Coisas Inteligentes com Arduino - Módulo 3
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      15/11/2018
  Data Atualizacao:  16/11/2018
  Descricao:         Projeto 03: Serviço para tocar várias melodias

*/

// importando bibliotecas

// biblioteca para trabalhar com páginas web
var app = require('express')();

// biblioteca para transferir dados por meio do protocolo HTTP
var server = require('http').Server(app);

// biblioteca para criar conexão socket
var io = require('socket.io')(server);

// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// biblioteca para saber ip da máquina
var ip = require("ip");  

// biblioteca de melodias
var listaMuiscas = require('j5-songs');

// variáveis
// representa a placa arduino
var board = new five.Board({port: "COM14"});

// representa o piezo
var piezo;

// representa a musica
var musica1, musica2, musica3;

// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  // servidor escutando na porta 8080
  server.listen(8080);

  // mensagem no console
  console.log("Digite no seu navegador http://"+ ip.address() + ":8080");

  // inicializa o piezo na porta 3 
  piezo = new five.Piezo(3);

  // escolhe a música
  // exemplos de musicas: mario-fanfare, mario-intro, starwars-theme
  musica1 = listaMuiscas.load("mario-fanfare");
  musica2 = listaMuiscas.load("mario-intro");
  musica3 = listaMuiscas.load("starwars-theme");
  
  // informando a página HTML que será vista pelo usuário
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/projeto-03-web.html');
  });

  // quando alguém conectar com o servidor por meio de socket
  io.on('connection', function (socket) {
    
    // quando for solicitado para ligar o LED
    socket.on('mario1', function (data) {
      
      // toca a musica
      piezo.play(musica1);

      // enviar resposta ao solicitante que o LED foi ligado
      socket.emit('estadoMusica', 'mario-fanfare');
    });

    // quando for solicitado para desligar o LED
    socket.on('mario2', function (data) {
    
      // toca a musica
      piezo.play(musica2);

      // enviar resposta ao solicitante que o LED foi ligado
      socket.emit('estadoMusica', 'mario-intro');
    });

    // quando for solicitado para desligar o LED
    socket.on('starwars', function (data) {
     
      // toca a musica
      piezo.play(musica3);

      // enviar resposta ao solicitante que o LED foi ligado
      socket.emit('estadoMusica', 'starwars-theme');
    });
  });
});