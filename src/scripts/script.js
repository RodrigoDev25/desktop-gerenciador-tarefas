function addTask() {
    // Pega o elemento do input onde o usuário digita a tarefa
    var input = document.getElementById("input-tarefa")

    // Adiciona evento para tecla Enter dentro do input
    input.addEventListener("keypress", function(event) {
        if(event.key == "Enter") {
            addTask()
        }
    }) // <<== fechando o parêntese que estava faltando

    // Armazena o valor digitado no input em uma variável
    var inputVar = input.value

    // Se o campo estiver vazio ou só com espaços, mostra alerta e sai da função
    if(inputVar.trim() == "") { // <<== aqui era null, mas deve ser ""
        alert("Digite algo")
        return
    }

    // Limpa o input depois de pegar o valor
    input.value = null

    // Pega o elemento da lista onde as tarefas serão adicionadas
    var list = document.getElementById("lista-tarefas")

    // Cria um novo elemento <li> (item da lista)
    var li = document.createElement("li")

    // Define o conteúdo do <li> com o texto da tarefa e um botão de remover com ícone de lixeira
    li.innerHTML = `${inputVar} <button onclick="this.parentElement.remove()"> <img id="x" src="../../assets/lixeira.png" width="17px" height="17px"> </button>`

    // Adiciona uma função ao clicar no <li> que marca a tarefa como concluída (altera a classe)
    li.onclick = function () {
        li.className = "tarefa-concluida"
    }

    // Adiciona o <li> criado dentro da lista de tarefas
    list.appendChild(li)
}
