const tarefa = document.getElementById('tarefa')
const adicionarDiv = document.getElementById('tarefasPendentes')
const concluirTarefa = document.getElementById('tarefasConcluidas')
const prioridade = document.getElementById('prioridade')
const aviso = document.getElementById('aviso')

function adicionarTarefa(){
    if (tarefa.value == ""){
        aviso.classList.remove('hidden')
    }else{
        aviso.classList.add('hidden')

        const novaTarefa = document.createElement('div')
        novaTarefa.textContent = tarefa.value

        const btnConcluir = document.createElement('button')
        btnConcluir.textContent = "Concluir"
        btnConcluir.classList.add('btn-concluir')

        const btnRemover = document.createElement('button')
        btnRemover.textContent = "Remover"
        btnRemover.classList.add('btn-remover')
        btnRemover.addEventListener('click', function(){
            novaTarefa.remove()
        })

        const divBotoes = document.createElement('div')
        divBotoes.classList.add('ml-25')
        divBotoes.appendChild(btnConcluir)
        divBotoes.appendChild(btnRemover)

        novaTarefa.appendChild(divBotoes)

        adicionarDiv.appendChild(novaTarefa)

        btnConcluir.addEventListener('click', function(){
            concluirTarefa.appendChild(novaTarefa)
            btnConcluir.remove()
            btnRemover.remove()
            divBotoes.innerHTML = pegarData()
        })

        if (prioridade.value == "baixa"){
            novaTarefa.classList.add('baixa-prioridade', 'todasTarefas')
            tarefa.value = ""
        }
        if (prioridade.value == "media"){
            novaTarefa.classList.add('media-prioridade', 'todasTarefas')
            tarefa.value = ""
        }
        if (prioridade.value == "alta"){
            novaTarefa.classList.add('alta-prioridade', 'todasTarefas')
            tarefa.value = ""
        }
    }
}

function pegarData(){
    const data = new Date()
    const dia = data.getDate()
    const mes = data.getMonth() + 1
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const segundo = data.getSeconds()

    return `Tarefa concluída em: ${dia}/${mes} às ${hora}:${minuto}:${segundo}`
}