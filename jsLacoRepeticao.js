/* MSG Emanuel (Setor: Estoque): Estou te enviando nossa lista com os números de códigos dos produtos e precisamos saber quais são PARES 
'58913','15984654', '548565', '198457','6815487', '157848', '20514899', '348951537', '5618976', '1564358196','4491598' '196845729','135205527','4619165','250120','19546827','251485','52849846'
*/

/* MSG Larissa (setor Estoque): Preciso que desta lista de produtos sejam separados os que são IMPARES para separar para o entregador
5687891,15984654,12365489,3211587,11250578,6815487,21055487,21598745,25879915,2168740,2547814,4491598,3552589879,351245876,6216512258,2811584
*/

/*MSG Valdomiro (Setor Vendas): Preciso de uma lista com os números dos produtos PARES da lista que a LARISSA te enviou e outra lista com os números IMPARES da lista do EMANUEL*/

const arrCodProdEmanuel = [
  "58913",
  "15984654",
  "548565",
  "198457",
  "6815487",
  "157848",
  "20514899",
  "348951537",
  "5618976",
  "1564358196",
  "4491598",
  "196845729",
  "135205527",
  "4619165",
  "250120",
  "19546827",
  "251485",
  "52849846",
];

const arrCodProdLarissa = [
  5687891, 15984654, 12365489, 3211587, 11250578, 6815487, 21055487, 21598745,
  25879915, 2168740, 2547814, 4491598, 3552589879, 351245876, 6216512258,
  2811584,
];

//console.log(arrCodProdLarissa);
/* Algoritmo
1 - Atribuir os números em um array;
2 - PERCORRER esse array de numeros;
  3 - Criar arrayResultadoPar;
  4 - SE o conteúdo da posição atual do array arrCodProdEmanuel for número par:
    5 - Atribuir no arrayResultadoPar;
*/
//console.log(arrCodProdEmanuel);

function numsPar(arrNumeros) {
  const arrayResultadoPar = [];

  for (let i = 0; i < arrNumeros.length; i++) {
    if (arrNumeros[i] % 2 === 0) {
      arrayResultadoPar.push(arrNumeros[i]);
      //console.log(`Na posição: ${i} tem o valor: ${arrNumeros[i]}`);
    }
    //console.log("**dentro do for**");
  }

  return arrayResultadoPar;
}

//console.log(arrayResultadoPar);
function numsImpar(arrNumerosRecebidos) {
  const arrayResultadoImpar = [];

  for (let i = 0; i < arrNumerosRecebidos.length; i++) {
    if (arrNumerosRecebidos[i] % 2 === 1) {
      //console.log(arrNumerosRecebidos[i]);
      arrayResultadoImpar.push(arrNumerosRecebidos[i]);
    }
  }
  return arrayResultadoImpar;
}

const emanuel = numsPar(arrCodProdEmanuel);
const larissa = numsImpar(arrCodProdLarissa);

const valdomiroPares = numsPar(arrCodProdLarissa);

const valdomiroImpares = numsImpar(arrCodProdEmanuel);

//console.log(` valores pares para o Emanuel ${emanuel}`);

//console.log(` valores IMPARES para a Larissa ${larissa}`);

//console.log(` valores PARES para a Valdomiro ${valdomiroPares}`);

//console.log(` valores IMPARES para a Valdomiro ${valdomiroImpares}`);

function numsImparWhile(arrDeNumeros) {
  const arrResultadoImpar = [];
  let i = 0;

  while (i < arrDeNumeros.length) {
    if (arrDeNumeros[i] % 2 === 1) {
      arrResultadoImpar.push(arrDeNumeros[i]);
    }

    i++;
  }

  return arrResultadoImpar;
}

/*console.log(
  `função retorna numeros impares com while ${numsImparWhile(
    arrCodProdLarissa
  )}`
);*/

const arrNumsSoma = [1, 2, 3];

function somaArray(arr) {
  let i = 0;
  let resultSoma = 0;

  while (i < arr.length) {
    resultSoma = resultSoma + arr[i];
    i++;
  }
  return resultSoma;
}

let varSomaArr = somaArray(arrNumsSoma);

console.log(varSomaArr);
