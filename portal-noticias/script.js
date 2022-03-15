/* ESTRUTURA HTML USADA COMO REFERECIA PARA O DOM

<article class="preview-article">
  <img
    src="img/unsplash_6JVlSdgMacE.png"
    alt="Editores de Código -  Como escolher um bom editor"
    title="Editores de Código -  Como escolher um bom editor"
  />
  <h2><a href="">Como utilizar o CSS da melhor forma em 2021</a></h2>
  <p>
    Transforme-se em especialista em UI Design e dê um Boost na sua
    carreira.
  </p>
  <section class="categoria">
    <h3>Entretenimento</h3>
  </section>
</article>
*/

const banco = [
  {
    srcImg: "img/unsplash_6JVlSdgMacE.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Entretenimento",
  },
  {
    srcImg: "img/unsplash_6JVlSdgMacE.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "2222222",
    parNew:
      "Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Culinaria",
  },
  {
    srcImg: "img/unsplash_6JVlSdgMacE.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "33333",
    parNew:
      "Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Dicas",
  },
  {
    srcImg: "img/unsplash_6JVlSdgMacE.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "5555555",
    parNew:
      "Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Entretenimento",
  },
];

//SELECIONANDO A ESTRUTURA HTML DA DIV COM A CLASSE container-articles
let containerArticles = document.getElementById("container-articles");

// FUNÇÃO QUE CRIA A ESTRUTURA HTML PARA CADA ARTIGO
function createPreviewArticle(
  imgScr,
  altImg,
  tituloImg,
  tituloNoticia,
  paragrafoNoticia,
  categoriaNoticia
) {
  let previewArticle = document.createElement("article");
  previewArticle.setAttribute("class", "preview-article");

  /*ESTRUTURA HTML DINAMICA (RECEBENDO INFOMAÕES DO ARRAY banco) CRIADA PELO DOM*/
  previewArticle.innerHTML = ` <img  src=${imgScr}  alt=${altImg}
  title=${tituloImg}/>
<h2><a href="">${tituloNoticia}</a></h2>
<p>
  ${paragrafoNoticia}
</p>
<section class="categoria">
  <h3>${categoriaNoticia}</h3>
</section>`;

  /* EXEMPLO DE ESTRUTURA HTML ESTÁTICA CRIADA PELO DOM
 previewArticle.innerHTML = ` <img  src="img/unsplash_6JVlSdgMacE.png"  alt="Editores de Código -  Como escolher um bom editor"
  title="Editores de Código -  Como escolher um bom editor"/>
<h2><a href="">Como utilizar o CSS da melhor forma em 2021</a></h2>
<p>
  Transforme-se em especialista em UI Design e dê um Boost na sua
  carreira.
</p>
<section class="categoria">
  <h3>Entretenimento</h3>
</section>`;*/

  containerArticles.appendChild(previewArticle);
}

// CHAMANDO A FUNÇÃO QUE CRIA O ARTIGO NA PÁGINA
//createPreviewArticle();

//FUNÇÃO QUE ATUALIZA A TELA COM NOTICIAS CARREGADAS DO BANCO DE NOTICIAS
function atualizaTelaNews() {
  banco.forEach((item) =>
    createPreviewArticle(
      item.srcImg,
      item.altImg,
      item.titleIMg,
      item.titleNew,
      item.parNew,
      item.categoria
    )
  );
}

atualizaTelaNews();
