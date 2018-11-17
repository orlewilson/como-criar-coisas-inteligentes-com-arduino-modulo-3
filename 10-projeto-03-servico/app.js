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
  app.listen(8080);

  // mensagem no console
  console.log("Digite no seu navegador http://"+ ip.address() + ":8080");
  console.log("tocar melodia mario-fanfare: /mario1");
  console.log("tocar melodia mario-intro: /mario2");
  console.log("tocar melodia starwars-theme: /starwarss");

  // inicializa o piezo na porta 3 
  piezo = new five.Piezo(3);

  // escolhe a música
  // exemplos de musicas: mario-fanfare, mario-intro, starwars-theme
  musica1 = listaMuiscas.load("mario-fanfare");
  musica2 = listaMuiscas.load("mario-intro");
  musica3 = listaMuiscas.load("starwars-theme");
  
  // aguardando chamada /mario1 para tocar mario-fanfare
  app.get('/mario1', function (req, res) {
    // toca a musica
    piezo.play(musica1);
    res.json({estado_musica : 'mario-fanfare'});
  });

  // aguardando chamada /mario2 para tocar mario-intro
  app.get('/mario2', function (req, res) {
    // toca a musica
    piezo.play(musica2);
    res.json({estado_musica : 'mario-intro'});
  });

  // aguardando chamada /starwars para tocar starwars-theme
  app.get('/starwars', function (req, res) {
    // toca a musica
    piezo.play(musica3);
    res.json({estado_musica : 'starwars-theme'});
  });
    
});