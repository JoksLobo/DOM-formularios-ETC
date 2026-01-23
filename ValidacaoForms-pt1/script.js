function validarFormulario() {
  // obter valor do campo de texto
  const campoTexto = document.getElementById("campoTexto");
  let valorCampo = campoTexto.value;

  if (valorCampo === "") {
    alert("O campo está vazio! Por favor preencha o campo de texto.");
    return false;
  } else {
    return true;
  }
}
