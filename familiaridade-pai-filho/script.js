// obter elemento pai
let pai = document.getElementById("pai");

// acessar o parentNode avô
let avo = pai.parentNode;
// console.log(avo);

// acessar parentNode Pai pelos filhos
let filhosParagrafos = document.querySelector("p");
let paiAtravesFilhos = filhosParagrafos.parentNode;
// console.log(paiAtravesFilhos);

// acessar os nós filhos usando childNodes
let filhosChildNodes = pai.childNodes;
// console.log(filhosChildNodes);

// acessar nós filhos usando children
let filhosChildren = pai.children;
// console.log(filhosChildren);

// acessar o primeiro filho usando firstChild
let primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);

// acessaar o último filho com lastChild
let ultimoFilho = pai.lastElementChild;
console.log(ultimoFilho);

// acessar o irmão usando o nextSibling
let segundoFilho = primeiroFilho.nextElementSibling;
console.log(segundoFilho);

//acessar o irmão anterior usando previousSibling
let terceiroFilho = ultimoFilho.previousElementSibling;
console.log(terceiroFilho);

//acessar o tio usando nextElementSibling
let tio = pai.nextElementSibling;
console.log(tio);

// acessar o pai usando previousElementSibling
let paiAtravesTio = tio.previousElementSibling;
console.log(paiAtravesTio);

// acessar apenas os elementos, sdem pegar os espaços em branco nodeType
let tioElemento = pai.nextSibling;
console.log(tioElemento);
while (tioElemento.nodeType !== 1) {
  tioElemento = tioElemento.nextSibling;
}
console.log(tioElemento);
