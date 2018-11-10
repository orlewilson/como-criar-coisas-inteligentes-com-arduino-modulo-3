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

// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// biblioteca para saber ip da máquina
var ip = require("ip");     

// informando a porta de comunicação
var board = new five.Board({port: "COM14"});
 
// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  // servidor escutando na porta 8080
  app.listen(8080);

  // mensagem no console
  console.log("Digite no seu navegador http://"+ ip.address() + ":8080");
  console.log("ligar led: /ligar");
  console.log("desligar led: /desligar");

  // informando que utilizará Led e qual porta
  var led = new five.Led(13);  

  // aguardando chamada /ligar para ligar LED
  app.get('/ligar', function (req, res) {
    led.on();
    res.json({status_led : 'ligado'});
  });

  // aguardando chamada /desligar para desligar LED
  app.get('/desligar', function (req, res) {
    led.off();
    res.json({status_led : 'desligado'});
  });
});
