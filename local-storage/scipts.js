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
      localStorage.removeItem("nome");
      localStorage.removeItem("idade");
      alert("Dados removidos com sucesso");
    });

    //carregar os dados do local storage
    const botaoCarregar = document.getElementById("carregar");
    botaoCarregar.addEventListener("click", () => {
      const nome = localStorage.getItem("nome");
      const idade = localStorage.getItem("idade");
      document.getElementById("texto").innerHTML =
        `Nome: ${nome} <br> Idade: ${idade}`;
    });
  });
});
