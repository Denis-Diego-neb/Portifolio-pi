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

