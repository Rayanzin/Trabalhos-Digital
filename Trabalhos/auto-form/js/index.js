
function consultarEndereco() {
    if (cep.value.length != 8) {
        alert("Cep inválido")
        return;
    }
    let url = `https://viacep.com.br/ws/${cep.value}/json/`
    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            autoCompletar(data)
        })
    })
}

cep.addEventListener('keyup', (e) => {
    if (e.key == "Enter") {
        consultarEndereco()
    }
})

function autoCompletar(dados){
    rua.value = dados.logradouro
    bairro.value = dados.bairro
    cidade.value = dados.localidade
    estado.value = dados.uf
}