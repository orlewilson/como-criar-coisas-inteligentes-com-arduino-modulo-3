/*
  Como Criar Coisas Inteligentes com Arduino - Módulo 3
  Facilitador:       Prof. Orlewilson Bentes Maia
  Data Criacao:      15/11/2018
  Data Atualizacao:  16/11/2018
  Descricao:         Projeto 04: Serviço para alertar sobre 
                     proximidade de objetos

*/

//Biblioteca do sensor ultrassônico
#include <Ultrasonic.h>

//Define os pinos para o trigger e echo
#define triggerPorta 5
#define echoPorta 4

//Inicializa o sensor nos pinos definidos acima
Ultrasonic ultrassom(triggerPorta, echoPorta);

// variável que guardará o valor da distância lida pelo ultrassônico
long distancia;

void setup()
{
  // Configura porta serial
  Serial.begin(9600);
  Serial.println("Lendo dados do ultrassonico...");
}

void loop()
{
    // ultrassom.Ranging(CM) retorna a distancia em centímetros(CM) ou polegadas(INC)
    distancia = ultrassom.Ranging(CM);
    Serial.print(distancia); //imprime o valor da variável distancia
    Serial.println("cm");
    delay(100);
}
