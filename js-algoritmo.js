/* Descrição do algoritmo
Crie um algoritmo que verifique a previsão do tempo, 
Se na previsão tiver sol escrever na tela 'ir para praia'
*/

/* Algoritmo 1
1. Verificar previsão do tempo;
2. Se na previsão estiver igual a sol;
  2.1 Então escrever 'ir para praia'
*/

let prevTempo = "sol";
let msgResultado = "ir para praia";
let msgResultado2 = "assistir netflix";
let tanqueComb = 10;
let carona = false;

/* sintaxe da estrutura de controle IF
if(parametor / verificação){
  Escopo (execução)
}
*/
/*if (prevTempo === "sol") {
  // console.log(msgResultado);
}*/

/*Operadores lógicos
AND/E (&&)
OR/OU (||) 
NOT (!)
*/

/* Descrição do algoritmo 2
Crie um algoritmo que verifique a previsão do tempo, 
e o tanque de combustivel do carro.
Se a previsão do tempo for igual a 'sol' e o tanque de combustível for maior que 80
então escrever na tela 'ir para praia' se não, escrever na tela 'assistir netflix'*/

/* Algoritmo 2
1. Veriricar previsão do tempo
2. SE previsão do tempo igual 'sol'
  2.1 E tanque do combustivel maior que 80
  2.2 ENTÃO escrever na tela o texto 'ir para praia'
3. SE NÃO
  3.1 Escrever na tela 'assistir netflix';
*/
/*if (prevTempo === "sol" && tanqueComb > 80) {
  console.log(msgResultado);
} else {
  console.log(msgResultado2);
}*/

/* Descrição do algoritmo 3
Crie um algoritmo que verifique o tanque de combustivel do carro ou se tem carona.
o tanque de combustível for maior que 80 ou tiver carona 
então escrever na tela 'ir para praia' se não, escrever na tela 'assistir netflix'*/

/* Algotirmo 3
1. Verificar tanque de gasolina
2. SE o tanque for maior que 80
  2.1 OU Carona igual a sim
  2.2 ENTÃO escrever na tela 'ir para praia'
3 SE NÃO escrever na tela 'assistir Neflix';

*/

/*if (tanqueComb > 80 || carona ) {
  console.log("result3: "+msgResultado);
} else {
  console.log("result3: "+msgResultado2);
}*/
/*console.log(`valorCaronaOriginal: ${carona}`);
console.log("valorCaronaInvertido: "+!carona)*

/*if (tanqueComb > 80 || !carona) {
  console.log("result4: " + msgResultado);
} else {
  console.log("result4: " + msgResultado2);
}*/


if((10<=1)){
  console.log('SIM');
}else{
console.log('NÃO');
}