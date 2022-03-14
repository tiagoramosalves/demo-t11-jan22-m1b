/*
 <div class="card-task">
  <div class="card-task-title">
    <img src="./img/task.svg" alt="" />
    <h5>Estudar Javascript</h5>
  </div>
  <div class="actions">
    <button><i class="fa fa-trash"></i></button>
    <button><i class="fa fa-check"></i></button>
  </div>
</div>
*/

/*let inputValue = document.getElementsByName("input");*/

//SELECIONANDO O CÓDIGO HTML PELO NOME DA TAG DO ELEMENTO input
let inputValue = document.querySelector("input");

//console.log(inputValue.type);
//console.log(inputValue.placeholder);
//console.log(inputValue.value);

/*SELECIONANDO O CÓDIGO HTML PELO ID container-tasks DO ELEMENTO div QUE 
VAI SEGURAR TODAS AS TASKS
*/
let divContainerTasks = document.querySelector("#container-tasks");

/* CODIGO DE EXEMPLO - SELECIONANDO O CÓDIGO HTML PELA CLASSE card-task
  USADO QUANDO TÍNHAMOS O HTML ESTÁTICO */
//let divCardTask = document.getElementsByClassName("card-task");

// do pai para o filho
/*divCardTask[0].addEventListener("click", function(){
  console.log('divCardTasks posição 0')
});*/

//SELECIONANDO O CÓDIGO HTML PELO ID DO ELEMENTO BOTÃO Inserir task
let btnInserir = document.getElementById("btnSubmit");

btnInserir.addEventListener("click", function (event) {
  event.preventDefault();
  //criarCardTask("valor do argumento");
  if (inputValue.value != "") {
    criarCardTask(inputValue.value);
    //console.log("CLICOU NO BOTÃO");
  }
  //console.log(inputValue.value);

  inputValue.value = "";
});

// FUNÇÃO DE EXEMPLO SOBRE COMO CAPTURAR AS TECLAS DIGITADAS
/*inputValue.addEventListener("keypress", inserirTaskEnter);

// FUNÇÃO QUE USA A TECLA QUE FOI PRESSIONADA NO INPUT
function inserirTaskEnter(event){
  let tecla = event.key
  console.log(tecla);
  if(inputValue.value != "" && tecla === "Enter"){
    console.log("apertou enter**");
  }
}
*/

// CRIANDO CARD TASK PADRÃO
criarCardTask("TASK PADRÃO 1");
criarCardTask("TASK PADRÃO 2");

//FUNÇÃO QUE CRIA A ESTRUTURA HTML DA TASK
function criarCardTask(textTask) {
  let divCardTask = document.createElement("div");
  divCardTask.setAttribute("class", "card-task");
  divCardTask.innerHTML = ` <div class="card-task-title">
<img src="./img/task.svg" alt="" />
<h5>${textTask}</h5>
</div>
<div class="actions">
<button class="trash fa fa-trash"></button>
<button class="check fa"></button>
</div>`;
  // document.getElementById("container-tasks").appendChild(divCardTask);
  divContainerTasks.appendChild(divCardTask);
}

/* ADICIONANDO NA VARIAVEL divContainerTasks A ESCUTA CLICK E
EXECUTANDO A FUNÇÃO identificaItem
*/
divContainerTasks.addEventListener("click", identificaItem);

// FUNÇÃO QUE IDENTIFICA QUAL O ITEM FOI CLICADO
function identificaItem(event) {
  //GUARDANDO NA VARIAVEL itemClicado A ESTRUTURA HTML QUE HOUVE O CLICK
  const itemClicado = event.target;

  //EXEMPLO DE PROPRIEDADES DO itemClicado QUE PODEMOS USAR

  //console.log(itemClicado.tagName);
  //console.log(itemClicado.className);
  //console.log(itemClicado.className);

  //EXEMPLO DE COMO ACICIONAR A CLASSE NO ELEMENTO

  /*if (itemClicado.className === "check fa") {
    //itemClicado.classList.add("fa-check");
    console.log(itemClicado.className);
    itemClicado.classList.add("check fa");
  }*/

  //EXEMPLO DE VERIFICAÇÃO DE CLASSE EXISTENTE NO ELEMENTO

  // if (
  //   itemClicado.className === "check fa" ||
  //   itemClicado.className === "check fa fa-check"
  // ){

  //VERIFICANDO SE O ELEMENTO CLICADO TEM A CLASSE check
  if (itemClicado.classList.contains("check")) {
    //ADICIONANDO/REMOVENDO A CLASSE fa-check DO ELMENTO itemClicked
    itemClicado.classList.toggle("fa-check");
  }

  //FEATURE REMOVER TASK
  //VERIFICANDO SE O ELEMENTO CLICADO TEM A CLASSE trash
  if (itemClicado.classList.contains("trash")) {
    //console.log("tem a classe trash");

    //OCULTANDO O PRÓPRIO BOTÃO DE EXCUIR
    //itemClicado.style.display = "none";

    /*GUARDANDO NA VARIAVEL divCardTask O PRÓXIIMO 
        ANCESTRAL COM A CLASSE card-task*/
    let divCardTask = itemClicado.closest(".card-task");
    //console.log(divCardTask);
    /*OCULTANDO O CÓDIGO HTML GUARDADO NA VARIAVEL divCardTask */
    divCardTask.style.display = "none";
  }
}
