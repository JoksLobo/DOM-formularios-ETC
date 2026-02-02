document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form");
  const botaoLimpar = document.getElementById("limpar");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // capturar os dados do formulário
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    //verificar se os campos estão preenchidos
    if (nome && idade) {
      //salvo no local storage
      localStorage.setItem("nome", nome);
      localStorage.setItem("idade", idade);

      //limpar o formulário
      document.getElementById("nome").value = "";
      document.getElementById("idade").value = "";
    } else {
      alert("Preencha todos os campos");
    }

    //limpar os dados do local storage
    botaoLimpar.addEventListener("click", () => {
      localStorage.clear();
    });
  });
});
