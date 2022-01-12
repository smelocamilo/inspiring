//@smc-copy.VA-1 ©2022

// BOTÕES
// Chamar o botão para ir para o topo
btnTopo = document.getElementById("btn-topo");
// Quando o utilizador rolar para baixo 80px do topo do documento, mostrar o botão
window.onscroll = function() {rolarBaixoFuncao()};
function rolarBaixoFuncao() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
}
// Quando o utilizador clicar no botão, sobe para o topo do documento
function irTopoFuncao() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, Edge e Opera
}

//CARREGAMENTO
var carregador
function carregamento() {
  carregador = setTimeout(mostraPagina, 1000);
}
function mostraPagina() {
  document.getElementById("carregador").style.display = "none";
  document.getElementById("embrulho").style.display = "block";
}
