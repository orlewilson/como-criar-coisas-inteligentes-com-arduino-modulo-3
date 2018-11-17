/*
  Como Criar Coisas Inteligentes com Arduino - Módulo 3
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      15/11/2018
  Data Atualizacao:  16/11/2018
  Descricao:         Projeto 03: Serviço para tocar várias melodias

*/

// importando bibliotecas

// biblioteca para comunicar com o Arduino
var five = require("johnny-five");  

// biblioteca de melodias
var listaMuiscas = require('j5-songs');

// variáveis
// representa a placa arduino
var board = new five.Board({port: "COM14"});

// representa o piezo
var piezo;

// representa a musica
var musica;

// quando a placa estiver pronta, execute.
board.on("ready", function() {  
	
	// inicializa o piezo na porta 3 
   	piezo = new five.Piezo(3);

   	// escolhe a música
   	// exemplos de musicas: mario-fanfare, mario-intro, starwars-theme
   	musica = listaMuiscas.load("mario-fanfare");
   
   	// toca a musica
   	console.log("tocando a musica...");
   	piezo.play(musica);
});