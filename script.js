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
        
        const textoTarefa = document.createElement('p')
        textoTarefa.textContent = tarefa.value

        const novaTarefa = document.createElement('div')
        novaTarefa.appendChild(textoTarefa)

        // const novaTarefa = document.createElement('div')
        // novaTarefa.textContent = tarefa.value

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
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth()+1).padStart(2, '0')
    const hora = String(data.getHours()).padStart(2, '0')
    const minuto = String(data.getMinutes()).padStart(2, '0')
    const segundo = String(data.getSeconds()).padStart(2, '0')

    return `${dia}/${mes} às ${hora}:${minuto}:${segundo}`
}