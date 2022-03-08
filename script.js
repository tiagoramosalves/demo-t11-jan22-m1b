//window.alert("popUp na tela !!");
//let url = window.document.URL;
let body = document.querySelector("body");
let url = document.URL;
//console.log(url);

let selectTagNameA = document.getElementsByTagName("a")[0];
//console.log(selectTagNameA);

//let tagIdA = document.getElementById("linkGoogle")["href"];
let tagIdA = document.getElementById("linkGoogle").href;
//console.log(tagIdA);

let tagQSA = document.querySelector("a#linkGoogle").href;

//console.log(tagQSA);

let tagQSA2 = document.querySelectorAll("a#linkGoogle2");

//console.log(tagQSA2);

let tagH1 = document.querySelector("h1").innerText;
//console.log(tagH1);

let tagH1Html = document.querySelector("h1");

//console.log(tagH1Html);

document.write("<p>texto adicionado pelo DOM </p>");

/*document.write(tagH1Html.innerHTML);
document.write(tagH1Html.innerHTML);

document.write(tagH1Html.innerHTML);
document.write(tagH1Html.innerHTML);
*/

let div1 = document.getElementById("div1");

//console.log(div1);

let button = document.querySelector("button.button");

///criando elemento
let divTerceira = document.createElement("div");
divTerceira.setAttribute("class", "divQuadrado");
divTerceira.innerText = "Div Terceira criada pelo DOM";
divTerceira.style.backgroundColor = "green";
divTerceira.style.color = "red";

//document.write(divTerceira.innerText);
//console.log(divTerceira);
body.appendChild(divTerceira);

for (i = 0; i < 3; i++) {
  let novoP;
  novoP = document.createElement("p");
  novoP.innerText = "Terceiro paragrafo";
  body.appendChild(novoP);
}

/////////////////EVENTOS DOM

let divInt = document.getElementById("divInt");

function clicou() {
  console.log("clicou na DIV");
}

divInt.addEventListener("mouseover", mouseMexeu);
//divInt.addEventListener("mouseout", mouseMexeu);

function mouseMexeu() {
  console.log("mouse mexeu");
  divInt.innerText = "mexeu o mouse";
}

divInt.addEventListener("mouseout", function () {
  console.log("mouse SAIU!");
  divInt.innerText = "mouse SAIU!";
});
