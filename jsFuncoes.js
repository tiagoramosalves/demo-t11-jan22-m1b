/*function nomeFuncao() {
console.log("primeira mensagem da função");
//escopo
return undefined;
console.log("SEGUNDA mensagem da função"); //DEPOIS DO RETURN NÃO EXECUTA MAIS NADA!!
}
nomeFuncao();*/

//torradeira();
let tarefa = "fazer";

function torradeira() {
  let alimento = "torrada";

  console.log("* " + tarefa + " Esquentar " + alimento);

  return undefined;
}
//console.log(tarefa);

function cafeteira() {
  console.log("* Fazer café.");

  return undefined;
}

function spotify() {
  console.log("* Tocar Musica.");
  return undefined;
}

function netflix(tipoConteudo = "desenho") {
  console.log("* Exibir " + tipoConteudo);
  return undefined;
}

function ifood() {
  let statusPedido = "saiu para entrega";
  /* console.log("* Fazer compra.");
console.log(statusPedido);*/

  return statusPedido;
}
/*netflix();
netflix("filme");
netflix("série");
netflix("documentário");
*/

let compraIfood = ifood();
ifood();
//console.log(compraIfood);
netflix("filme");
/*spotify();

ifood();
ifood();
spotify();

cafeteira();*/
