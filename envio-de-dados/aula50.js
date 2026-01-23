//FormData - { nome: "Joks", email: "email@email.com" };
document.addEventListener("DOMContentLoaded", function () {
  const myForm = document.getElementById("meuFormulario");

  myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let dados = new FormData(myForm);

    //exibir dados no console
    for (let [chave, valor] of dados.entries()) {
      console.log(chave + ":" + valor);
    }
  });
});
