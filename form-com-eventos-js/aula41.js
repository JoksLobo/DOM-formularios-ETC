//Evento de Submit
document.addEventListener("DOMContentLoaded", function () {
  // evento de submit
  let form = document.getElementById("meuFormulario");

  form.addEventListener("submit", function () {
    alert("Dados enviados com sucesso!");
  });
});

// evento de change
let input = document.getElementById("campoTexto");

input.addEventListener("change", function () {
  console.log("Campo de texto foi alterado: " + input.value);
});

//evento de focus
input.addEventListener("focus", function () {
  console.log("Campo de texto focado");
});

// evento de blur
input.addEventListener("blur", function () {
  console.log("Campo de texto desfocado!");
});

// manipulação do formulário
function mostrarValorCampo() {
  input.value;

  alert("O valor do campo de texto é: " + input.value);
}
