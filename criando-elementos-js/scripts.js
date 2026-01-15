function criarElemento() {
  const ul = document.getElementById("listaElementos");

  const novaLi = document.createElement("li");
  const novoInput = document.createElement("input");

  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}
