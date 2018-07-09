function randomica(min, max) {
    const valor = Math.random() * (max - min) + (min)
    return Math.floor(valor)
}

console.log(randomica(10,100))

var opcao = 5

do {
    opcao = randomica(1,10)
    console.log('O número gerado pelo sistema é ' + opcao + '!')
} while (opcao != 5)

notas = [10.2, 3.5, 4.7, 8.9, 3.5, 10.0]

for(i = 0; i < notas.length; i++) {
    console.log(`A média do aluno foi igual a ${notas[i]}`)
}

const sapopemba = ['plínio', 'floriano', 'laurencio', 'diná', 'andréa']

console.log(sapopemba)


for(a in sapopemba) {
    for(b in sapopemba){
    console.log(`Um dos célebres moradores região selecionada se chama ${sapopemba[a]}`)
    console.log(`Pares de índices: ${a}, ${b}`)}
} 

function getInteiroAleatorioEntre(min, max) {

    //if(min > max) [max, min] = [min, max]

    const valor = Math.random() * (max - min) + (min);

    return Math.floor(valor);

}

var sorteio = 101;

do{ 

    sorteio = getInteiroAleatorioEntre(100, 115);

    console.log("O número sorteado foi " + sorteio);

} while(sorteio != 100);