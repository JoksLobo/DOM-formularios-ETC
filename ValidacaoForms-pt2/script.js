document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("meuFormulario");

  myForm.addEventListener("submit", function (e) {
    resetarMensagensErro();
    if (!validarCamposObrigatorios()) {
      e.preventDefault();
    }

    if (!compararValores()) {
      e.preventDefault();
    }
  });

  function validarCamposObrigatorios() {
    let camposObrigatorios = document.querySelectorAll(".obrigatorio");

    let camposValidos = true;

    for (let i = 0; camposObrigatorios.length > i; i++) {
      let campo = camposObrigatorios[i];

      if (campo.value === "" || campo.value === null) {
        exibirErro(campo, "Campo obrigatório");
        camposValidos = false;
      }
    }
    return camposValidos;
  }

  function compararValores() {
    let senha = document.getElementById("senha");
    let confirmarSenha = document.getElementById("confirmarSenha");

    if (senha.value !== confirmarSenha.value) {
      exibirErro(confirmarSenha, "As senhas não coincidem");
      return false;
    }
    return true;
  }

  function exibirErro(elemento, mensagem) {
    let mensagemErro = elemento.parentElement.querySelector(".error-message");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "inline-block";
  }

  function resetarMensagensErro() {
    let mensagensErro = document.querySelectorAll(".error-message");

    for (let i = 0; i < mensagensErro.length; i++) {
      mensagensErro[i].textContent = "";
    }
  }
});
