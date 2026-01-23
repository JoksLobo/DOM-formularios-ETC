document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("meuFormulario");

  myForm.addEventListener("submit", function (e) {
    if (!validarCamposObrigatorios()) {
      e.preventDefault();
    }

    function validarCamposObrigatorios() {
      let camposObrigatorios = document.querySelectorAll(".obrigatorio");

      let camposValidos = true;

      for (let i = 0; camposObrigatorios.length > i; i++) {
        let campo = camposObrigatorios[i];

        if (campo.value === "" || campo.value === null) {
          console.log("Este campo é obrigatorio");
          camposValidos = false;
        }
      }
      return camposValidos;
    }
  });
});
