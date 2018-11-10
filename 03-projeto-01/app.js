/*
  Como Criar Coisas Inteligentes com Arduino - Módulo 3
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      09/11/2018
  Data Atualizacao:  10/11/2018
  Descricao:         Projeto 01 - Serviço para ligar/desligar LED
*/

// bibliotecas
// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// informando a porta de comunicação (não se esquecer de mudar porta)
var board = new five.Board({port: "COM14"});

// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   // placa pronta
   console.log("Placa Arduino pronta!");  
   
   // informando que utilizará Led e qual porta
   var led = new five.Led(13);  
   
   // liga/desliga a cada 1s
   led.blink(1000);  
});