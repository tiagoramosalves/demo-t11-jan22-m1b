// chave: valor
let usuario = {
  nome: "João",
  idade: 30,
  email: "joao@email.com.br",
  anotacao: ["Primeiro Artigo", "Segundo Artigo"],
  localusuario: "São Paulo",
};

//console.log(usuario);
//console.log(`nome usuário: ${usuario.nome}`);
//console.log(`anotação usuário: ${usuario.anotacao[1]}`);
//console.log(`email usuário: ${usuario["email"]}`);
//usuario.localusuario = "Novo Local";
// hello world ops xD

function add(a, b) {
  return a + b;
}

const funcionarios = [
  {
    nome: "João",
    idade: 30,
    email: "joao@email.com.br",
    local: "Curitiba",
    cargos: ["Cargo 1", "Cargo 2"],
  },
  {
    nome: "Marco",
    idade: 25,
    email: "marco@email.com.br",
    local: "São Paulo",
    cargos: ["Cargo 1", "Cargo 2", "Cargo 3"],
  },
  {
    nome: "Elias",
    idade: 27,
    email: "elias@email.com.br",
    local: "São Paulo",
    cargos: ["Cargo 1", "Cargo 2"],
  },
];

function lerArrDeObjetos(arr) {
  //mostrando todo o array de objetos
  //console.log(arr);

  //acessando apenas uma posição (antes do for)
  //console.log(arr[0]);

  const arrResultado = [];

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    console.log(arr[i].nome);
    //console.log(arr[i]["nome"]);
    //console.log(arr[i].email);
    arrResultado.push(arr[i].email);
  }
  return arrResultado;
}

console.log(lerArrDeObjetos(funcionarios));

const arrEmailFuncaionario = lerArrDeObjetos(funcionarios);

//console.table(arrEmailFuncaionario);

console.table(funcionarios);

function cidadeFuncionarios(arr) {
  const arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);

    if (arr[i].local === "São Paulo") {
      arrResult.push(arr[i].nome);
    }
  }
  //console.log(arrResult);
  return arrResult;
}

//console.log(cidadeFuncionarios(funcionarios));
const arrNomeFuncSP = cidadeFuncionarios(funcionarios);

//console.log(arrNomeFuncSP);

// exemplo de API da Receita federal com o CNPJ do Google Brasil
//https://www.receitaws.com.br/v1/cnpj/06990590000123
