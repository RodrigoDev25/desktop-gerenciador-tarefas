// Criando variavel
let inputMain = document.getElementById("input-tarefa");

// Adicionar um evento de keypress no input
inputMain.addEventListener("keypress", function (event) {

    // Verificar se a tecla pressionada foi o Enter
    if (event.key == "Enter") {
        // Vou chamar a função addTask
        addTask()
    }
})

function addTask() {
    // Pega o input
    var input2 = document.getElementById("input-tarefa");

    // Pega o valor do input
    var input2Value = input2.value;

    // CORRIGIDO AQUI
    if (input2Value.trim() === "") {

        alert("Digite uma tarefa");

        return
    }

    // Limpar o input
    input2.value = "";

    // Pega a lista de tarefas
    var list = document.getElementById("lista-tarefas")

    // Criar um elemento li
    var li = document.createElement("li");

    // Adicionar o valor do INPUT para o LI
    li.innerHTML = `${input2Value} <button onclick="this.parentElement.remove()" >🗑️</button>`;

    // Adicionar a função de marcar a tarefa como concluída
    li.onclick = function () {
        li.className = "tarefa-concluida";
    }

    // Adicionar o LI na lista de tarefas
    list.appendChild(li)

    showModal()
}

function showModal() {
    // Pega a modal
    var modal = document.getElementById("modal-sucesso");

    // Adicionar audio
    var audio = document.getElementById("audio-teste");
    audio.play();

    // Adiciona o css da modal 
    modal.classList.add('open-modal');

    setTimeout(function () {
        // Remove o css da modal
        modal.classList.remove('open-modal');
    }, 3000);
}
