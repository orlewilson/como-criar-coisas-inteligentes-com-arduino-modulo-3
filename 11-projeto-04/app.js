/*
  Como Criar Coisas Inteligentes com Arduino - Módulo 3
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      15/11/2018
  Data Atualizacao:  16/11/2018
  Descricao:         Projeto 03: Serviço para alertar sobre 
                     proximidade de objetos

*/

// importando bibliotecas

// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// informando a porta de comunicação
var board = new five.Board({port: "COM14"});
 
// variáveis

// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  	var proximity = new five.Proximity({
    	controller: "HCSR04",
    	pin: 7
  	});

  	proximity.on("data", function() {
    	console.log("Proximity: ");
    	console.log("  cm  : ", this.cm);
    	console.log("  in  : ", this.in);
    	console.log("-----------------");
  	});

  	proximity.on("change", function() {
    	console.log("The obstruction has moved.");
  	});
});