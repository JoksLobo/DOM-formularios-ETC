// obter elemento pai
let pai = document.getElementById("pai");

// acessar o parentNode avô
let avo = pai.parentNode;
console.log(avo);

// acessar parentNode Pai pelos filhos
let filhosParagrafos = document.querySelector("p");
let paiAtravesFilhos = filhosParagrafos.parentNode;
console.log(paiAtravesFilhos);

// acessar os nós filhos usando childNodes
let filhosChildNodes = pai.childNodes;
console.log(filhosChildNodes);

// acessar nós filhos usando children
let filhosChildren = pai.children;
console.log(filhosChildren);
