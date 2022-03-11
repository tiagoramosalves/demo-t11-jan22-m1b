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

let inputValue = document.querySelector("input");

//console.log(inputValue.type);
//console.log(inputValue.placeholder);
//console.log(inputValue.value);

let divContainerTasks = document.querySelector("#container-tasks");

let divCardTask = document.getElementsByClassName("card-task");

// do pai para o filho
/*divCardTask[0].addEventListener("click", function(){
  console.log('divCardTasks posição 0')
});*/

let btnInserir = document.getElementById("btnSubmit");

btnInserir.addEventListener("click", function (event) {
  event.preventDefault();
  //criarCardTask("valor do argumento");
  criarCardTask(inputValue.value);
  //console.log("CLICOU NO BOTÃO");
  //console.log(inputValue.value);

  inputValue.value = "";
});

function criarCardTask(textTask) {
  let divCardTask = document.createElement("div");
  divCardTask.setAttribute("class", "card-task");
  divCardTask.innerHTML = ` <div class="card-task-title">
<img src="./img/task.svg" alt="" />
<h5>${textTask}</h5>
</div>
<div class="actions">
<button><i class="fa fa-trash"></i></button>
<button class="check fa"></button>
</div>`;
  // document.getElementById("container-tasks").appendChild(divCardTask);
  divContainerTasks.appendChild(divCardTask);
}

// getItem
divContainerTasks.addEventListener("click", identificaItem);

function identificaItem(event) {
  const itemClicado = event.target;

  //console.log(itemClicado.tagName);
  //console.log(itemClicado.className);

  itemClicado.classList.toggle("fa-check");
  //console.log(itemClicado.className);
  //itemClicado.classList.add("check fa");

  //Adicioando classe com if
  /*if (itemClicado.className === "check fa") {
    //itemClicado.classList.add("fa-check");
    console.log(itemClicado.className);
    itemClicado.classList.add("check fa");
  }*/
}
