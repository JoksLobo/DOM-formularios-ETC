const lista = document.getElementById("lista");

function adicionarItem() {
  const novaLi = document.createElement("li");
  novaLi.textContent = "Novo Item";

  lista.appendChild(novaLi);
}

function removerItem() {
  const removeLi = lista.lastElementChild;

  lista.removeChild(removeLi);
}
