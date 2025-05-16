function addTask() {
    var input = document.getElementById("input-tarefa")
    var inputVar = input.value
    input.value = null

    var list = document.getElementById("lista-tarefas")

    // criando elemento li
    var li = document.createElement("li")

    li.innerHTML = `${inputVar} <button onclick="this.parentElement.remove()"> <img src="../../assets/lixeira.png" width="17px" height="17px"> </button> `

        li.onclick = function() {
            li.className = "tarefa-concluida"
        }
    // adicionando li à lista 

    list.appendChild(li);
}
