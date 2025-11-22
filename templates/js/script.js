// Quando o usuário rola a página, essa função é chamada
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar"); // seleciona a barra de navegação

  // Se o scroll passou de 50px pra baixo, adiciona a classe "nav-solid"
  // Isso geralmente serve para mudar a cor de fundo do menu ao rolar
  if (window.scrollY > 50) {
    nav.classList.add("nav-solid");
  } else {
    nav.classList.remove("nav-solid"); // caso contrário, remove a classe
  }
});


// Aguarda todo o HTML carregar antes de executar o JS
document.addEventListener("DOMContentLoaded", function () {

  // LISTA DE IMAGENS DO CARROSSEL
  // Aqui você só adiciona ou remove imagens conforme quiser
  const imagens = [
    "imagens/quemsou/imagemexemplo.jpeg",
    "imagens/quemsou/imagemteste.jpg",
    "imagens/quemsou/imagemexemplo.jpeg"
  ];

  // Seleciona o contêiner onde os slides do carrossel serão criados
  const carousel = document.getElementById("carousel-dynamic");

  // Limpa o HTML interno antes de montar o carrossel
  carousel.innerHTML = "";

  // Loop que monta um slide para cada imagem
  for (let i = 0; i < imagens.length; i++) {

    // Calcula qual será a imagem "da esquerda", "do centro" e "da direita"
    // O uso de módulo (%) faz o carrossel ser circular
    const left = imagens[(i - 1 + imagens.length) % imagens.length];  // imagem anterior
    const center = imagens[i];                                       // imagem principal
    const right = imagens[(i + 1) % imagens.length];                 // próxima imagem

    // Cria um <div> que será o slide do carrossel
    const item = document.createElement("div");
    item.classList.add("carousel-item");

    // O primeiro slide sempre precisa ter a classe "active"
    if (i === 0) item.classList.add("active");

    // Estrutura HTML de cada slide (3 imagens: esquerda borrada + centro nítida + direita borrada)
    item.innerHTML = `
      <div class="d-flex justify-content-center align-items-center gap-3">
        <img src="${left}" class="carousel-img blur-img">
        <img src="${center}" class="carousel-img main-img">
        <img src="${right}" class="carousel-img blur-img">
      </div>
    `;

    // Adiciona o slide pronto dentro do carrossel
    carousel.appendChild(item);
  }
});
