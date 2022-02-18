const residencial = [
  "terreo",
  "Judite",
  "Matilde",
  "Emanuel",
  "José",
  "Judite",
  "Matilde",
  "Emanuel",
  "Judite",
  "Matilde",
  "Emanuel",
  "terreo",
  "Judite",
  "Matilde",
  "Emanuel",
];

const arr1 = ["a","b","c"]
const arr2 = arr1;

let var1 = "nome1";
let var2 = var1;

var2 = "nome2"

console.log(`var1: ${var1}`);
console.log(`var2: ${var2}`);

arr2.push("teste");
console.log(arr1);

//console.log(residencial);

/*
let posicaoAdd = residencial.push("José");
console.log(posicaoAdd);
*/
/*Adicionar valor na última posição*/
/*
residencial.push("José");
console.log(residencial);
*/

/*Remover a última posição*/
///residencial.pop();
//console.log(residencial);

/*Removendo a primeira posição*/
//residencial.shift()
//console.log(residencial);

/*Buscando posição de um array a partir do conteúdo*/
////let pos = residencial.indexOf("Matilde");
// console.log(pos);

/*Buscando um indice que não existe (-1)*/
// let posNExistente = residencial.indexOf("Bruno");
// console.log(posNExistente);

/*
const itemRemovido = residencial.splice(2,2);

console.log(residencial);

console.log(itemRemovido);
*/

console.log(residencial);
/*
console.log(residencial[0]);
console.log(residencial[1]);
console.log(residencial[2]);
console.log(residencial[3]);
console.log(residencial[4]);
*/
/*
let i = 0;
i++;
i=i+1;
i=i+1;
i=i+1;
console.log(i);

let resultado = i+1;
console.log(resultado);
*/

console.log(`total pos: ${residencial.length}`);

for (let i = 0; i < residencial.length; i++) {
  console.log(`indice: ${i}`);
  console.log(`valor da pos: ${residencial[i]} `);
}