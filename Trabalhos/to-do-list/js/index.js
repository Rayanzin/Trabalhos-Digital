let modalenter = document.querySelector(".modal")
function novaTarefa() {
    overlay.classList.add("active");
    modalenter.classList.add("modalon")
}
function fecharModal() {
    overlay.classList.remove("active");
    modalenter.classList.remove("modalon")
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