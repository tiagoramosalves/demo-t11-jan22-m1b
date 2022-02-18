// Função que tem duas variáveis do tipo numeros e retorna a soma de dessas variáveis
function funcSomar() {
  let num1 = 2;
  let num2 = 3;
  let total = num1 + num2;

  return total;
}

funcSomar();

//////////////////////////////////////

function lerString(meuNome) {
  let tamanhoString = meuNome.length; //5

  for (let cont = 0; cont < tamanhoString; cont++) {
    const letraAtual = meuNome[cont];
    console.log(letraAtual);
  }

  return undefined;
}

lerString("Tiago");
