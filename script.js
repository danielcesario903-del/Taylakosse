function abrirCarta() {
  // efeito simples antes de mudar página
  document.body.style.transition = "0.5s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "carta.html";
  }, 500);
}