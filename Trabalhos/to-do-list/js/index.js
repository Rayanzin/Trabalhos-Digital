let modalenter = document.querySelector(".modal")
function novaTarefa(){
    overlay.classList.add("active");
        modalenter.classList.add("modalon")
}
function fecharModal(){
    overlay.classList.remove("active"); 
    modalenter.classList.remove("modalon")
}
document.addEventListener('keyup', (e) => {
    if(e.key == "Escape"){
        fecharModal()
    }
})