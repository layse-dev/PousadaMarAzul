var buttom_top = document.getElementById("back-to-top");

// quando rolar a página 20px do topo para baixo, o botão será exibido
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    buttom_top.style.display = "block";
  } else {
    buttom_top.style.display = "none";
  }
}

// quando clicar no botão, a página rola para o topo do documento
buttom_top.addEventListener("click", ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
