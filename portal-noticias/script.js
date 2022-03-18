/*  REFERENCIA DE ESTRUTURA HTML USADA PARA CRIAR CADA ARTIGO

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

/*ARRAY DE OBJETOS CRIADOS PARA SIMULAR UMA API (interface de programação de aplicativos) COMO FONTE DE DADOS DOS ARTIGOS E POSTS*/
const banco = [
  {
    srcImg: "img/unsplash_6JVlSdgMacE.png",
    altImg: "Como utilizar o CSS da melhor forma em 2022",
    titleIMg: "Como utilizar o CSS da melhor forma em 2022",
    titleNew: "Como utilizar o CSS da melhor forma em 2022",
    parNew:
      "Dicas | Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Dicas",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_J5yoGZLdpSI.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Novidades | Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Novidades",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_AIIC6wCqkQc.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Curiosidades | Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Curiosidades",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_webyw4NsFPg.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Novidades | Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Novidades",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_webyw4NsFPg.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      " Dicas | Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Dicas",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_webyw4NsFPg.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "News | Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "News",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_J5yoGZLdpSI.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Curiosidades | Transforme-se em especialista em UI Design e dê um Boost na suacarreira.",
    categoria: "Curiosidades",
    secao: "main",
  },
  {
    srcImg: "img/unsplash_vw3Ahg4x1tY.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "Novidades R | Como manter a conssistência nos estudos",
    categoria: "Novidades",
    secao: "recents",
  },
  {
    srcImg: "img/unsplash_pHPzdEHN6Os.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Curiosidades R | Home Office - será esse o futuro de todas empresas?",
    categoria: "Curiosidades",
    secao: "recents",
  },
  {
    srcImg: "img/unsplash_vw3Ahg4x1tY.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "News R | Como manter a conssistência nos estudos",
    categoria: "News",
    secao: "recents",
  },
  {
    srcImg: "img/unsplash_JwP90y9wgr4.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "Dicas R |Como manter o ambiente de estudos organizado e agra...",
    categoria: "Dicas",
    secao: "recents",
  },
  {
    srcImg: "img/unsplash_oVWc3lehRz8.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Novidades P | Bancos de imagens gratuítos para utilizar em seus projet...",
    categoria: "Novidades",
    secao: "popular",
  },
  {
    srcImg: "img/unsplash_IUrdCYJm1u4.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "Curiosidades P | O que considerar na hora de comprar um pc novo",
    categoria: "Curiosidades",
    secao: "popular",
  },
  {
    srcImg: "img/unsplash_UmaojK7erQo.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew: "News P | Qual a diferença entre UI Design e Front end.",
    categoria: "News",
    secao: "popular",
  },
  {
    srcImg: "img/unsplash_oVWc3lehRz8.png",
    altImg: "Editores de Código -  Como escolher um bom editor",
    titleIMg: "Editores de Código -  Como escolher um bom editor",
    titleNew: "Como utilizar o CSS da melhor forma em 2021",
    parNew:
      "Dicas P | Bancos de imagens gratuítos para utilizar em seus projet...",
    categoria: "Dicas",
    secao: "popular",
  },
];

//SELECIONANDO A ESTRUTURA HTML DA DIV COM A CLASSE container-articles
let containerArticles = document.getElementById("container-articles");

//SELECIONANDO A ESTRUTURA HTML DA SECTION COM A CLASSE container-recent-posts
let containerRecentPosts = document.getElementById("container-recent-posts");

//SELECIONANDO A ESTRUTURA HTML DA SECTION COM A CLASSE container-popular-posts
let containerPopularPosts = document.getElementById("container-popular-posts");

//SELECIONANDO A ESTRUTURA HTML DO ELEMENTO INPUT COM ID search-bar
let searchBar = document.getElementById("search-bar");
//SELECIONANDO A ESTRUTURA HTML DO ELEMENTO BUTTON COM ID btn-seach
let btnSeach = document.getElementById("btn-seach");

let conainerCategorias = document.getElementById("container-categorias");
//console.log(conainerCategorias);

conainerCategorias.addEventListener("click", filterContent);

///FUNÇÃO QUE FILTRA OS CONTEÚDOS POR CATEGORIA
function filterContent(event) {
  let btnNav = document.querySelectorAll("li");
  //console.log(btnNav);
  let itemClicked = event.target;
  //console.log(itemClicked);

  /*REMOVENDO DE TODOS BOTÕES CLASSE current-category (QUE ALTERA AS CORES DO BOTÃO) */
  //itemClicked.classList.remove('current-category');
  if (itemClicked.id != "container-categorias") {
    btnNav.forEach((itemLi) => {
      itemLi.classList.remove("current-category");
    });
    /*ADICIONANDO NO BOTÃO CLICADO A CLASSE current-category QUE ALTERA AS CORES DO BOTÃO CLICADO*/
    itemClicked.classList.add("current-category");

    //console.log(itemClicked.innerText);
    let categoriaConteudoClicado = itemClicked.innerText;

    const arrObjfiltedCategory = banco.filter(function (character) {
      return character.categoria.includes(categoriaConteudoClicado);
    });

    localStorage.setItem("itemClickedUser", categoriaConteudoClicado);

    containerArticles.innerHTML = "";
    containerRecentPosts.innerHTML = "";
    containerPopularPosts.innerHTML = "";



    if (categoriaConteudoClicado == "Todos") {
      atualizaTelaNews();
    } else {
      //console.log(arrObjfiltedCategory);
      atualizaTelaNews(arrObjfiltedCategory);
    }
  }
}

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

// TESTE: CHAMANDO A FUNÇÃO createPreviewArticle RESPONSÁVEL POR CRIAR O ARTIGO NA PÁGINA
//createPreviewArticle();

/* REFERENCIA DE ESTRUTURA HTML DOS POSTS
 <article class="recent-post">
    <img src="img/unsplash_vw3Ahg4x1tY.png" alt="" />
    <h5>Como manter a conssistência nos estudos</h5>
</article>
*/

//FUNÇÃO RESPONSÁVEL POR CRIAR A ESTRUTURA HTML DOS POSTS RECENTES
function createRecentPosts(imgSrc, textContent) {
  let recentPost = document.createElement("article");
  recentPost.classList.add("recent-post");
  recentPost.innerHTML = ` <img src=${imgSrc} alt="" />
  <h5>${textContent}</h5>`;

  containerRecentPosts.appendChild(recentPost);
}

// TESTE: CHAMANDO A FUNÇÃO createRecentPosts RESPONSÁVEL POR CRIAR O ARTIGO NA PÁGINA
//createRecentPosts();

/*
<article class="popular-post">
  <img src="img/unsplash_oVWc3lehRz8.png" alt="" />
  <h5>Bancos de imagens gratuítos para utilizar em seus projet... </h5>
</article>
*/
//FUNÇÃO RESPONSÁVEL POR CRIAR A ESTRUTURA HTML DOS POSTS POPULARES
function createPopularPosts(imgSrc, textContent) {
  let popularPost = document.createElement("article");
  popularPost.classList.add("popular-post");
  popularPost.innerHTML = ` <img src=${imgSrc} alt="" />
  <h5>${textContent}</h5>`;

  containerPopularPosts.appendChild(popularPost);
}

// TESTE: CHAMANDO A FUNÇÃO createPopularPosts RESPONSÁVEL POR CRIAR O POST POPULAR NA PÁGINA
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

/*ADICIONANDO A ESCUTA (MONITORAMENTO) NA ESTRUTURA HTML DA VARIÁVEL btnSeach QUANDO HOUVER O CLICK DISPARA A FUNÇÃO seachContent*/
btnSeach.addEventListener("click", seachContent);

function seachContent(event) {
  event.preventDefault();

  //GUARDANDO NA VARIÁVEL textToSearch O VALOR DIGITADO NO CAMPO INPUT ATRAVES DO searchBar.value
  let textToSearch = searchBar.value;

  // GUARDANDO NA VARIAVEL subtitleArticle A ESTRUTURA HTML COM TODOS OS ELEMENTOS <p> DA PÁGINA
  let subtitleArticle = document.querySelectorAll("p");

  // GUARDANDO NA VARIAVEL titlePosts A ESTRUTURA HTML COM TODOS OS ELEMENTOS <h5> DA PÁGINA
  let titlePosts = document.querySelectorAll("h5");

  // ATRIBUINDO A VARIAVEL pattern A ESTRUTURA REGEX (EXPRESSÃO REGULAR) COM A REGRA PARA NÃO CONSIDERAR NA BUSCA DAS PALAVRAS SE O USUARIO DIGITOU MAIUSCULA OU MINUSCULO (gi === Global InCaseSentitive)
  let pattern = new RegExp(`${textToSearch}`, "gi");

  //TESTANDO A ESTRUTURA HTML GUARDADA NA VARIAVEL subtitleArticle QUE DEVE CONTER UMA COLEÇÃO DE ELEMENTOS <p>
  //console.log(subtitleArticle);
  for (let i = 0; i < subtitleArticle.length; i++) {
    //TESTANDO A ESTRUTURA HTML DE CADA POSIÇÃO DA COLEÇÃO
    //console.log(subtitleArticle[i].innerHTML);

    // SUBSTITUINDO O TEXTO ENCONTRADO COM AS TAGS <mark></mark> QUE DEIXAM O TEXTO GRIFADO
    subtitleArticle[i].innerHTML = subtitleArticle[i].textContent.replace(
      pattern,
      (match) => `<mark>${match}</mark>`
    );

    // EXEMPLO: ALTERANDO O TEXTO ENCONTRADO COM AS TAGS <mark></mark> QUE DEIXAM O TEXTO GRIFADO
    /*subtitleArticle[i].innerHTML = subtitleArticle[i].textContent.replace(
      textToSearch,
      function (match) {
        return `<mark>${match}</mark>`;
      }
    );*/
  }
  // ESTRUTURA DE REPETIÇÃO QUE SUBSTITUI A PALAVRA DIGITADA PELO USUÁRIO NA SEARCH BAR POR <mark>palavra</mark> E TEM COMO RESULTADO A PALAVRA GRIFADA
  for (let i = 0; i < titlePosts.length; i++) {
    titlePosts[i].innerHTML = titlePosts[i].textContent.replace(
      pattern,
      (match) => `<mark>${match}</mark>`
    );
  }

  // EXEMPLO DE TENTATIVA PARA GRIFAR A FRASE DA PALAVRA PESQUISADA
  /*for (let i = 0; i < titlePosts.length; i++) {
    console.log(titlePosts[i].innerText);
    titlePosts[i].innerHTML = titlePosts[i].textContent.replace(
      pattern, `<mark>${titlePosts[i].innerText}</mark>`
    );
  }*/

  //console.log(searchBar.value);
}

/*FUNÇÃO atualizaTelaNews COM SWITCH CASE CONSIDERANDO A SEÇÃO DO CONTEÚDO */
function atualizaTelaNews(font = banco) {
  font.forEach(function (item) {
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

// CHAMANDO A FUNÇÃO PRINCIPAL RESPONSÁVEL POR ATUALIZAR TODA A PÁGINA SEPARANDO OS CONTEÚDOS POR SEÇÃO
atualizaTelaNews();
