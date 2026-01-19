const meuElemento = document.getElementById("meuElemento");

function makeRound() {
  meuElemento.classList.add("circle");
  meuElemento.classList.remove("square");
}
function makeSquare() {
  meuElemento.classList.add("square");
  meuElemento.classList.remove("circle");
}
function alternateShape() {
  meuElemento.classList.toggle("circle");
  meuElemento.classList.toggle("square");
}
function verifyClass() {
  if (meuElemento.classList.contains("circle")) {
    console.log("elemento possui a classe circle");
  } else console.log("Elemento possui a classe square");
}
