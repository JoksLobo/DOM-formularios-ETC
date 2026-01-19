const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  // Confirma se o input tem algum valor, caso não tiver emite um alerta
  if (taskInput.value !== "") {
    // cria um novo elemento li
    const li = document.createElement("li");

    // pega o valor do input e o insere na li criada
    li.textContent = taskInput.value;

    // adiciona um botão para remover a tarefa
    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";
    removerBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // renderiza o botão na li
    li.appendChild(removerBtn);

    // renderiza o elemento li na tela
    taskList.appendChild(li);

    // atualiza e deixa o input em branco
    taskInput.value = "";
  } else {
    alert("Por favor, insira uma tarefa");
  }
}
