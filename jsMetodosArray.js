const arrBooks = ["C-Livro1", "D-Livro2", "1-Livro3", "Z-Livro4", "V-Livro5"];

///// Metodo inclues

let buscaLivro = arrBooks.includes("1-Livro3");
//console.log(`buscaLivro: ${buscaLivro}`);

let buscaLivro2 = arrBooks.includes("Livro3");
//console.log(`buscaLivro2: ${buscaLivro2}`);

// A partir de uma posição no array
let buscaLivro3 = arrBooks.includes("1-Livro3", 2);
//console.log(`buscaLivro3: ${buscaLivro3}`);

// Buscando o valor "1-Livro3"  a partir da posição 3
let buscaLivro4 = arrBooks.includes("1-Livro3", 3);
//console.log(`buscaLivro4: ${buscaLivro4}`);

// metodo indexOf

let resultIndexOf = arrBooks.indexOf("Z-Livro4");
console.log(`resultIndexOf: ${resultIndexOf}`);

// buscando um valor que não existe no array o retor é -1
let resultIndexOf2 = arrBooks.indexOf("Z-Livro7");

//console.log(`resultIndexOf2: ${resultIndexOf2}`)

// testando casesensitive
let resultIndexOf3 = arrBooks.indexOf("Z-livro4");
//console.log(`resultIndexOf3: ${resultIndexOf3}`)

///// metodo filter

const numeros = [36, 99, 37, 63];

let resultFilterNumbers = numeros.filter(function (item) {
  let result;
  result = item > 60;
  return result;
});

//console.log(`${}`)
//console.log(`resultFilterNumbers: ${resultFilterNumbers}`)
//console.log(resultFilterNumbers);

// Arrow function
let resultFilterNumbers2 = numeros.filter((item) => item > 60);

//console.log(`resultFilterNumbers2: ${resultFilterNumbers2}`)
//console.log(resultFilterNumbers2);

const produtos = [
  { id: 1, nome: "detergente", valor: 2.0, categoria: "limpeza" },
  { id: 2, nome: "amaciante", valor: 6.5, categoria: "limpeza" },
  { id: 3, nome: "pão", valor: 2.0, categoria: "alimento" },
  { id: 4, nome: "queijo", valor: 7.0, categoria: "alimento" },
  { id: 5, nome: "leite", valor: 2.2, categoria: "alimento" },
];

const alimentos = produtos.filter(function (item) {
  let result;
  result = item.categoria == "alimento";
  return result;
});
// retornou o array de produtos que tem a categoria igual a alimento
//console.log(alimentos);

//// metodo find

const array1 = [6, 10, 100, 18, 130, 4];

let resultFind = array1.find(function (elemento) {
  return elemento > 50;
});

//console.log(resultFind);

///// metodo concat
const arrUm = [10, 11, 12];
const arrDois = [13, 14, 15];

const resultConcat = arrDois.concat(arrUm);
//console.log(resultConcat);

const arrOrder = resultConcat.sort();
console.log(arrOrder);

/// filtrando os valores do array ordenado

const resultFilterArr = arrOrder.filter(function (item) {
  return item > 11;
});
console.log(resultFilterArr);

const resultFilterArr2 = arrDois
  .concat(arrUm)
  .sort()
  .filter(function (item) {
    return item > 11;
  });
console.log(resultFilterArr2);
