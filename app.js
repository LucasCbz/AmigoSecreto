//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionandoAmigos() {
  let amigoEntrada = document.getElementById("amigo");
  let amigoAtual = amigoEntrada.value;
  if (amigoAtual === "") {
    alert("Por favor, insira um nome!");
  } else {
    amigos.push(amigoAtual);
    amigoAtual.innerHTML = "";
    criandoListaAmigos();
  }
}
function criandoListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    resultado.innerHTML = "A lista de amigos está vazia!";
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  resultado.innerHTML =
    "🎉 O amigo sorteado é: <strong>" + amigoSorteado + "</strong>!";
}
console.log(amigos);
