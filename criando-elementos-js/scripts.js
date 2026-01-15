function criarElementoInnerText() {
  const novoInput = document.createElement("input");
  const ul = document.getElementById("listaElementos");
  const novaLi = document.createElement("li");
  novaLi.innerText = "Novo input com Inner Text";

  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}

function criarElementoInnerHTML() {
  const ul = document.getElementById("listaElementos");
  const novaLi = document.createElement("li");
  novaLi.innerHTML = "<p>Criei um texto</P>";
  ul.appendChild(novaLi);
}
function criarElementoTextContent() {
  const ul = document.getElementById("listaElementos");
  const novaLi = document.createElement("li");
  const novoInput = document.createElement("input");

  novaLi.textContent = "Atribuindo conteúdo TextContent";
  novaLi.appendChild(novoInput);
  ul.appendChild(novaLi);
}
