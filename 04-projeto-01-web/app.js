/*
  Como Criar Coisas Inteligentes com Arduino - Módulo 3
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      09/11/2018
  Data Atualizacao:  10/11/2018
  Descricao:         Projeto 01 - Serviço para ligar/desligar LED
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

// informando a porta de comunicação
var board = new five.Board({port: "COM14"});
 
// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  // servidor escutando na porta 8080
  server.listen(8080);

  // mensagem no console
  console.log("Digite no seu navegador http://"+ ip.address() + ":8080");

  // informando que utilizará Led e qual porta
  var led = new five.Led(13);  

  // informando a página HTML que será vista pelo usuário
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/projeto-01-web.html');
  });

  // quando alguém conectar com o servidor por meio de socket
  io.on('connection', function (socket) {
    
    // quando for solicitado para ligar o LED
    socket.on('ligar', function (data) {
      // ligar LED
      led.on();

      // enviar resposta ao solicitante que o LED foi ligado
      socket.emit('respostaLed', 'ligado');
    });

    // quando for solicitado para desligar o LED
    socket.on('desligar', function (data) {
      // desligar LED
      led.off();

      // enviar resposta ao solicitante que o LED foi desligado
      socket.emit('respostaLed', 'desligado');
    });
  });
}); 