/*Criar uma função que recebe dois valores, multiplica a soma por dois e verifica 
SE o resultado da multiplicação for maior 7 E menor 20 subtrai 5 da multiplicação
E retorna o valor subtrair 
SE NÃO retornar o resultado da multiplicação

*/

/*Algoritmo
1 - Criar função multiplica;
2 - Função multiplica recebe dois parametros;
3 - criar variavel resSoma que recebe a soma dos dois valores;
4 - criar a variavel resMult que recebe a variavel resSoma multiplicando por dois;
5 - criar verificação (if) SE a variavel resMult for maior 7 E (&&) resMult for menor que 20
  5.1 - subtrair 5 da variavel resMult 
6 SE NÃO atender a condição (if) retornar o resultado da multiplicação (resMult)
*/

function multiplica(num1, num2) {
  let resSoma = funcSomar(num1, num2);
  let resMult = resSoma * 2;

  if (resMult > 7 && resMult < 20) {
    let resSubtr = resMult - 5;
    return resSubtr;
  } else {
    return resMult;
  }
}

function funcSomar(var1, var2) {
  //let num1 = var1;
  //let num2 = var2;
  //let total = num1 + num2;
  //let total = var1 + var2;

  //return total;
  return var1 + var2;
}

let varResFuncMultiplica = multiplica(3, 2);

console.log(`varResultadoMultiplica: ${varResFuncMultiplica}`);

//console.log( multiplica(3, 2));
