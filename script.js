// Selecionar o botão de troca de tema
const themeSwitcher = document.getElementById("themeSwitcher");

// Adicionar um evento de clique ao botão de troca de tema
themeSwitcher.addEventListener("click", () => {
  // Alternar a classe 'dark' no corpo do documento
  document.body.classList.toggle("dark");

  // Atualizar o texto do botão para refletir o estado atual do tema
  if (document.body.classList.contains("dark")) {
    themeSwitcher.textContent = "Trocar Tema: Dark";
  } else {
    themeSwitcher.textContent = "Trocar Tema: Color";
  }
});

// Código para o menu e navegação
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Atualizar a navegação com base na rolagem
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*="${id}"]`)
        .classList.add("active");
    }
  });
};

// Alternar o menu quando o ícone é clicado
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
