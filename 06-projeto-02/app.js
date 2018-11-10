/*
  Como Criar Coisas Inteligentes com Arduino - Módulo 3
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      09/11/2018
  Data Atualizacao:  10/11/2018
  Descricao:         Projeto 02: Serviço para escolher cor de um 
                     mini abajur usando LED RGB
*/

// importando bibliotecas

// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// informando a porta de comunicação
var board = new five.Board({port: "COM14"});
 
// variáveis

// mudar cor do LED RGB 
var rgb;

// indice para mudar cor
var indice = 0;
  
// lista de cores
var cores = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];


// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  // informando que utilizará Led RGB em quais portas PWM
  rgb = new five.Led.RGB([6, 5, 3]);
  
  // chama a funcao tocarFesta
  setInterval(function() {tocarFesta();}, 1000);
  
});

function tocarFesta(){
  // mostrar cor
  rgb.color(cores[indice++]);
      
  // se o indice for igual ao tamanho do tamanho do vetor cores, 
  // reinicia a contagem a partir de zero
  if (indice === cores.length) {
    indice = 0;
  }
}