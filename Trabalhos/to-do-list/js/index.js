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
function desejaExcluir() {
    overlay.classList.add("active");
    cancelar.classList.add("active");
}

let div
lista.addEventListener('click', function (event) {
    if (event.target.classList.contains('btnExcluir')) {
        let deletar = event.target.parentElement;
        div = deletar.parentNode
    }
})
function excluirTarefa() {
    lista.removeChild(div);
    fecharModal()
}
let tarefas = [
    {
        titulo: "pendurar quadro",
        descricao: "fazer dois furos na parede para colocar as buchas e os parafusos e pendurar o quadro"
    },
    {
        titulo: "Comer",
        descricao: "Em casa"
    },
    {
        titulo: "Reunião com cliente",
        descricao: "ir na KF veiculos se reunir com fabricio"
    },
    {
        titulo: "Estudar",
        descricao: "Entender melhor variaveis e constantes"
    },
    {
        titulo: "comprar capacete",
        descricao: "ir na loja e comprar capacete que eu ja escolhi e não ceder ao consumismo"
    },
]