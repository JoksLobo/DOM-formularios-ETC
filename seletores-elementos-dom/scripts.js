const titulo = document.getElementsByTagName("h2");
console.log("Selecionando pela tag h2: ", titulo);

const paragrafosEItens = document.getElementsByClassName("texto-lista");
console.log("Selecionando pela classe texto-lista: ", paragrafosEItens);

const destacado = document.getElementById("destacado");
console.log("Selecionado pelo id destacado: ", destacado);

const destacadoSelector = document.querySelector("#destacado");
console.log("Selecionado pelo seletor css #destacado: ", destacadoSelector);

const todosPEItens = document.querySelectorAll(".texto-lista");
console.log("Selecionado por seletor css .texto-lista: ", todosPEItens);

const inputName = document.getElementsByName("username");
console.log("Selecionado pelo name do elemento: ", inputName);

const inputEmail = document.getElementsByName("email");
console.log("Selecionado pelo name do elemento: ", inputEmail);

const todosElementos = document.querySelectorAll("*");
console.log("Selecionando todos os elementos: ", todosElementos);
