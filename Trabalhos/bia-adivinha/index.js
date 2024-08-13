let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

let tentativas = []
let count = 10

chutar.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        if(tentativas.indexOf(chutar.value) == -1){
            tentativas.push(chutar.value)
            palpites.innerHTML = tentativas.join().replaceAll(',',' - ')
            if (chutar.value == random) {
                console.log('você acertou');
            } else if (chutar.value < random) {
                count--
                alert(`Dica: O número que Bia pensou é maior, você ainda tem ${count} tentativas restantes`)
            } else if (chutar.value > random) {
                count--
                alert(`Dica: O número que Bia pensou é menor, você ainda tem ${count} tentativas restantes`)
            }
        }else{
            alert('Você ja tentou esse Número')
        }
    }
})

