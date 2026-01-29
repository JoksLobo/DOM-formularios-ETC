document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("calc-form");
  const nomeInput = document.getElementById("nome");
  const nomeError = document.getElementById("nome-error");
  const alturaInput = document.getElementById("altura");
  const pesoInput = document.getElementById("peso");
  const resultado = document.getElementById("resultado");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!nomeInput.value) {
      nomeError.style.display = "block";
      return;
    } else {
      nomeError.style.display = "none";
    }

    const nome = nomeInput.value;
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);

    const imc = peso / (altura * altura);
    console.log(Math.floor(imc));

    let categoria;
    if (imc < 18.5) {
      categoria = "Abaixo do peso";
      resultado.style.backgroundColor = "#ff9999";
    } else if (imc < 25) {
      categoria = "Peso normal";
      resultado.style.backgroundColor = "#99ff99";
    } else if (imc < 30) {
      categoria = "Sobrepeso";
      resultado.style.backgroundColor = "#ffcc00";
    } else {
      categoria = "Obesidade";
      resultado.style.backgroundColor = "#ff0000";
    }

    resultado.innerHTML = `
      <p>Nome: ${nome}</p>
      <p>IMC: ${imc.toFixed(2)}</p>
      <p>Categoria: ${categoria}</p>
    `;
  });
});
