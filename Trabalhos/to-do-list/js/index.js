let modalenter = document.querySelector(".modal")
function novaTarefa() {
    overlay.classList.add("active");
    modalenter.classList.add("active")
}
function fecharModal() {
    overlay.classList.remove("active");
    modalenter.classList.remove("active")
    cancelar.classList.remove("active");
}
document.addEventListener('keyup', (e) => {
    if (e.key == "Escape") {
        fecharModal()
    }
})
let li;
function desejaExcluir(item) {
    li = item
    overlay.classList.add("active");
    cancelar.classList.add("active");
}



let tarefas = [
    {
        titulo: "Ir para casa",
        descricao: "Tomar banho e almoçar"
    },
    {
        titulo: "Estudar",
        descricao: "Aperfeiçoar conhecimento em javascript"
    },
    {
        titulo: "jogar",
        descricao: "Jogar algum jogo, de preferencia algum que não me dê rage"
    },
    {
        titulo: "Assistir",
        descricao: "Procurar algum filme para assistir com a muié"
    },
    {
        titulo: "Dormir",
        descricao: "Dormir, porque infelizmente sou CLT"
    }
]

function adicionarTarefa() {
    if (titulo.value != '' && descricao.value != '') {
        tarefas.push({ titulo: titulo.value, descricao: descricao.value })
        console.log(tarefas);
        listarTarefas()
        fecharModal()
        titulo.value = ''
        descricao.value = ''
    }
}
function listarTarefas() {
    lista.innerHTML = ''
    for (let i = 0; i <= tarefas.length - 1; i++) {
        lista.innerHTML += `
        <li>
        <div>
        <h5>${tarefas[i].titulo}</h5>
        <p>${tarefas[i].descricao}</p>
        </div>
        <div>
        <box-icon class="btnExcluir" name='trash' onclick="desejaExcluir(${i})"></      box-icon>
        </div>
        </li>`
    }
}
function excluirTarefa() {
    tarefas.splice(li, 1);
    fecharModal()
    listarTarefas()
}
listarTarefas()



