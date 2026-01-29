document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("calc-form");
  const nomeInput = document.getElementById("nome");
  const nomeError = document.getElementById("nome-error");
  const alturaInput = document.getElementById("altura");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!nomeInput.value) {
      nomeError.style.display = "block";
    }
  });
});
