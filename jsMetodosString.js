// split
/* parametros opcionais
Separador: Define como dividir uma string, seja por uma vírgula, caracter, etc;
Limite:  Limita o número de divisões (splits) a partir de um número.

*/
let diasSemana = "seg,ter,qua,qui,sex,sab,dom";
let meuTexto = "Olá, seja bejam bem vindos";
let meusNums = "0123456789";

const resultDiasSemana = diasSemana.split();
const resultDiasSemana2 = diasSemana.split("");
const resultDiasSemana3 = diasSemana.split(",");
const resultDiasSemana4 = diasSemana.split(",", 3);

/*
console.log(resultDiasSemana);
console.log(resultDiasSemana2);
console.log(resultDiasSemana3);
*/
//console.log(resultDiasSemana4);

/*Joint tora as posições do array em string*/
let resultJoint = resultDiasSemana4.join();
//console.log(resultJoint);

/*Slice
O método slice() copia uma parte de um array e o retorna como um novo array. Isso não modifica o array original
*/
/*const resTextoSlice = meusNums.slice(2,8);
const resTextoSlice2 = meusNums.slice(5,-1);

console.log(`${meusNums}`);
console.log(`${resTextoSlice}`);
console.log(`${resTextoSlice2}`);
*/

/*Replace
substitui um trecho de uma string por outro
*/

let fraseInicial = "Aprendendo HTML e CSS consigo aplicar lógica no código";
let fraseCorreta = fraseInicial.replace("HTML e CSS", "JavaScript");

/*
console.log(fraseInicial);
console.log(fraseCorreta);
//a variavel inicial mantem o valor
console.log(fraseInicial);
*/

/* reverse
inverte as posições
*/
let ordemPrimeiro = ["terceiro", "segundo", "primeiro"];
let arrResultOrdem = ordemPrimeiro.reverse();

/*altera a ordem do array*/
/*
console.log(ordemPrimeiro);
console.log(arrResultOrdem);
*/

/*Reverse*/
/*Este código não funciona por que precisamos transformar a string em array e depois em string de novo*/
//let resultTextoPrimeiroReverse = textoPrimeiroReverse.reverse();

let textoPrimeiroReverse = "primeiro";
console.log(textoPrimeiroReverse);

const arrStringSeparada = textoPrimeiroReverse.split("");
console.log(arrStringSeparada);

const arrStringInvertida = arrStringSeparada.reverse();
console.log(arrStringInvertida);

let stringResultReverse = arrStringInvertida.join("");
console.log(stringResultReverse);

let resultDoisReverse = textoPrimeiroReverse.split("").reverse().join("");

console.log(`resultDoisReverse: ${resultDoisReverse}`);

/*
let nome = "kenZIE";
//let nomeMinusculo = nome.toLocaleLowerCase();
//let nomeMinusculo2 = nome.toLowerCase();
//console.log(nomeMinusculo);
//console.log(nomeMinusculo2);

let nomeMaiusculo = nome.toUpperCase();
//console.log(nomeMaiusculo);

let primeiraLetraMaiuscula = nomeMaiusculo[0];
//console.log(primeiraLetraMaiuscula);

let resulNome = primeiraLetraMaiuscula + nomeMinusculo.substr(1)
console.log(`resultNome: ${resulNome}`);
*/
