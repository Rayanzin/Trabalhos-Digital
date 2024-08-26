let urlR = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/1|2|3|4|5`
fetch(urlR).then(function (response) {
    response.json().then(function (data) {
        console.log(data);
        addRegioes(data)
    })
})
let opt = document.getElementsByTagName('option')
function addRegioes(dados) {
    for (let i = 0; i <= dados.length - 1; i++) {
        sel.innerHTML +=
         `
            <option>
                ${dados[i].sigla}
            </option>
         `
    }
}

function buscarRegiao(){
    console.log(opt.value);
    if(opt.value == "N"){
        console.log('deu');
    }else{
        console.log('deu n');
        
    }
}

// function ufNorte() {
//     let UFN = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/1/estados`
//     fetch(UFN).then(function (response) {
//         response.json().then(function (data) {
//             console.log(data);
//         })
//     })
//     for (let i = 0; i <= dados.length - 1; i++) {
//         uf.innerHTML += `
//             <option id="${i}">
//                 ${dados[i].nome}
//             </option>
//             `
//     }
// }

// let UFNE = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/2/estados`
//     fetch(UFNE).then(function (response) {
//         response.json().then(function (data) {
//             console.log(data);
//             addRegioes(data)
//         })
//     })

//     let UFSE = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/3/estados`
//     fetch(UFSE).then(function (response) {
//         response.json().then(function (data) {
//             console.log(data);
//             addRegioes(data)
//         })
//     })

//     let UFS = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/4/estados`
//     fetch(UFS).then(function (response) {
//         response.json().then(function (data) {
//             console.log(data);
//             addRegioes(data)
//         })
//     })
//     let UFCO = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/5/estados`
//     fetch(UFCO).then(function (response) {
//         response.json().then(function (data) {
//             console.log(data);
//             addRegioes(data)
//         })
//     })