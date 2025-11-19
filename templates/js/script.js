window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.classList.add("nav-solid");
  } else {
    nav.classList.remove("nav-solid");
  }
});