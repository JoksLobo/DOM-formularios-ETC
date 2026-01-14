const listaItens = document.getElementById("lista").getElementsByTagName("li");
console.log(listaItens);
console.log(listaItens[1]);

const paragrafo = document.getElementById("conteudo").querySelectorAll("p");
console.log(paragrafo);
for (let i = 0; i < paragrafo.length; i++) {
  console.log(paragrafo[i]);
}
