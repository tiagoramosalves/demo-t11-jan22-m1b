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
    altImg: "Como utilizar o CSS da melhor forma em 2022",
    titleIMg: "Como utilizar o CSS da melhor forma em 2022",
    titleNew: "Como utilizar o CSS da melhor forma em 2022",
    parNew:
      "Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Dicas",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_J5yoGZLdpSI.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Entretenimento",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_AIIC6wCqkQc.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Curiosidades",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_webyw4NsFPg.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Novidades",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_vw3Ahg4x1tY.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "Como manter a conssistência nos estudos",
    categoria: "Novidades",
    secao: "recents",
  },
  {
    srcImg: "img/unsplash_pHPzdEHN6Os.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "Home Office - será esse o futuro de todas empresas?",
    categoria: "Novidades",
    secao: "recents",
  },
  {
    srcImg: "img/unsplash_JwP90y9wgr4.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "Como manter o ambiente de estudos organizado e agra...",
    categoria: "Novidades",
    secao: "recents",
  },
  {
    srcImg: "img/unsplash_oVWc3lehRz8.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "Bancos de imagens gratuítos para utilizar em seus projet...",
    categoria: "Novidades",
    secao: "popular",
  },
  {
    srcImg: "img/unsplash_IUrdCYJm1u4.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "O que considerar na hora de comprar um pc novo",
    categoria: "Novidades",
    secao: "popular",
  },
  {
    srcImg: "img/unsplash_UmaojK7erQo.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "Qual a diferença entre UI Design e Front end.",
    categoria: "Novidades",
    secao: "popular",
  },
];

//SELECIONANDO A ESTRUTURA HTML DA DIV COM A CLASSE container-articles
let containerArticles = document.getElementById("container-articles");

//SELECIONANDO A ESTRUTURA HTML DA SECTION COM A CLASSE container-recent-posts
let containerRecentPosts = document.getElementById("container-recent-posts");

//SELECIONANDO A ESTRUTURA HTML DA SECTION COM A CLASSE container-popular-posts
let containerPopularPosts = document.getElementById("container-popular-posts");

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

/* ESTRUTURA HTML DOS POSTS
 <article class="recent-post">
    <img src="img/unsplash_vw3Ahg4x1tY.png" alt="" />
    <h5>Como manter a conssistência nos estudos</h5>
</article>
*/

function createRecentPosts(imgSrc,textContent) {
  let recentPost = document.createElement("article");
  recentPost.classList.add("recent-post");
  recentPost.innerHTML = ` <img src=${imgSrc} alt="" />
  <h5>${textContent}</h5>`;

  containerRecentPosts.appendChild(recentPost);
}

//createRecentPosts();

/*
<article class="popular-post">
  <img src="img/unsplash_oVWc3lehRz8.png" alt="" />
  <h5>Bancos de imagens gratuítos para utilizar em seus projet... </h5>
</article>
*/

function createPopularPosts(imgSrc, textContent) {
  let popularPost = document.createElement("article");
  popularPost.classList.add("popular-post");
  popularPost.innerHTML = ` <img src=${imgSrc} alt="" />
  <h5>${textContent}</h5>`;

  containerPopularPosts.appendChild(popularPost);
}

//createPopularPosts();

//FUNÇÃO QUE ATUALIZA A TELA COM NOTICIAS CARREGADAS DO BANCO DE NOTICIAS
/* EXEMPLO DE FUNÇÃO (ARROW FUNCTION) atualizaTelaNews ANTES DE TRATAR A SEÇÃO DO CONTEUDO NA PÁGINA
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
}*/

/*EXEMPLO FUNÇÃO atualizaTelaNews COM IF/ELSE CONSIDERANDO A SEÇÃO DO CONTEÚDO */
/*function atualizaTelaNews() {
  banco.forEach(function (item) {
    if (item.secao === "main") {
      createPreviewArticle(
        item.srcImg,
        item.altImg,
        item.titleIMg,
        item.titleNew,
        item.parNew,
        item.categoria
      );
    }else if(item.secao === "recents"){
      createRecentPosts();
    }else if(item.secao === "popular"){
      createPopularPosts();
    }
  });
}*/

/*UNÇÃO atualizaTelaNews COM SWITCH CASE CONSIDERANDO A SEÇÃO DO CONTEÚDO */
function atualizaTelaNews() {
  banco.forEach(function (item) {
    switch (item.secao) {
      case "main":
        createPreviewArticle(
          item.srcImg,
          item.altImg,
          item.titleIMg,
          item.titleNew,
          item.parNew,
          item.categoria
        );
        break;
      case "recents":
        createRecentPosts(item.srcImg, item.parNew);
        break;
      case "popular":
        createPopularPosts(item.srcImg, item.parNew);
        break;
    }
  });
}

atualizaTelaNews();
