let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

let tentativas = []
let count = 10
perdeu.innerHTML = `Você não acertou, o número era: ${random}`

chutar.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        if (tentativas.indexOf(chutar.value) == -1) {
            if (chutar.value <= 100 && chutar.value >= 1) {
                tentativas.push(chutar.value)
                palpites.innerHTML = tentativas.join().replaceAll(',', ' - ')
                if (chutar.value == random) {
                    img.src = 'imgs/bia-acertou.png'
                    acertou.style.display = 'block'
                    chutar.style.display = 'none'
                    acertou.innerHTML = `Parabéns o número é: ${chutar.value}`
                    console.log('você acertou');
                } else if (chutar.value < random) {
                    count--
                    alert(`Dica: O número que Bia pensou é maior, você tem ${count} tentativas restantes`)
                    if (count == 0) {
                        img.src = 'imgs/bia-acertou.png'
                        errado.style.display = 'block'
                        choro.style.display = 'block'
                        gambiarra.style.display = 'block'
                        boca.style.display = 'block'
                        chutar.style.display = 'none'
                        perdeu.style.display = 'block'
                        btn.style.display = 'block'
                    }
                } else if (chutar.value > random) {
                    count--
                    alert(`Dica: O número que Bia pensou é menor, você tem ${count} tentativas restantes`)
                    if (count == 0) {
                        img.src = 'imgs/bia-acertou.png'
                        errado.style.display = 'block'
                        choro.style.display = 'block'
                        gambiarra.style.display = 'block'
                        boca.style.display = 'block'
                        chutar.style.display = 'none'
                        perdeu.style.display = 'block'
                        btn.style.display = 'block'
                    }
                }
            } else {
                alert('O número tem quer ser entre 1 E 100')
            }
        } else {
            alert('Você ja tentou esse Número')
        }
    }
})
