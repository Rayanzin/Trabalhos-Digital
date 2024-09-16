// mostra cada regiao
let urlR = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/1|2|3|4|5`
fetch(urlR).then(function (response) {
    response.json().then(function (data) {
        addRegioes(data)
    })
})
function addRegioes(dados) {
    for (let i = 0; i <= dados.length - 1; i++) {
        sel.innerHTML +=
            `
            <option value="${i+1}">
                ${dados[i].nome}
            </option>
         `
    }
}
// mostra cada uf das regioes
let aux;
function buscarRegiao() {
    cidades.style.display = 'none'
    cidade.style.display = 'none'
    let UFs = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${sel.value}/estados`
    fetch(UFs).then(function (response) {
        response.json().then(function (data) {
            ufPorRegiao(data)
        })
    })
    aux = codigosUf[sel.value-1]

}
let norte = [11, 12, 13, 14, 15, 16, 17]
let nordeste = [21, 22, 23, 24, 25, 26, 27, 28, 29]
let suldeste = [31, 32, 33, 35]
let sul = [41, 42, 43]
let centro = [50, 51, 52, 53]
let codigosUf = [norte, nordeste, suldeste, sul, centro]

function ufPorRegiao(dados) {
    uf.style.display = 'block'
    uf.innerHTML = ''
    for (let i = 0; i <= dados.length - 1; i++) {
        uf.innerHTML +=
            `
            <option value="${aux[i]}">
                ${dados[i].nome}
            </option>
         `
    }

}
// mostra cada municipio
function buscarMunicipios() {
    let estado = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`
    console.log(uf.value);
    fetch(estado).then(function (response) {
        response.json().then(function (data) {
            PegarCidades(data)
        })
    })
}
function PegarCidades(dados) {
    cidade.style.display = 'block'
    cidades.innerHTML = ''
    
    for (let i = 0; i <= dados.length - 1; i++) {
        cidades.innerHTML +=
            `
            <option>
                ${dados[i].nome}
            </option>
         `
    }
}
