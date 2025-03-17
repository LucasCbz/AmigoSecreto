//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionandoAmigos() {
  let amigoAtual = document.querySelector("input").value;
  if (amigoAtual == "") {
    alert("Por favor, insira um nome!");
  } else {
    amigos.push(amigoAtual);
    amigoAtual = "";
  }
}
console.log(amigos);
