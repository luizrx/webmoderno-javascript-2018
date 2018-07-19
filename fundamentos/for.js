
const notas = [2, 3, 5, 6, 1, 2, 3.5, 4.2, 6.7, .7, 8.1]

let avaliacoes = {
    roberto: 4,
    eduardo: 6,
    thais: 7,
    carol: 8.1
}

console.log(notas)

console.log(avaliacoes)

for (let i = 0; i < notas.length; i++) {

    console.log(`A nota obtida pelo aluno foi ${notas[i]}!`)

}



for(i in notas) {

    console.log(`A nota obtida pelo aluno ${i} foi ${notas[i]}`)

}

for(prop in avaliacoes) {

    console.log(`A nota obtida pelo aluno ${prop} foi ${avaliacoes[prop]}`)
    
}