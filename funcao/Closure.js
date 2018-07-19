// Closure é o escopo criado quando um função é declarada e acompanha a função quando ela é chamada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}


const minhaFuncao = fora()
console.log(minhaFuncao())


const marcas = ['volkswagen', 'ford', 'dasla', 'fiat']

// function impressao (nome, indice) {

//     console.log(`Se eu pudesse, eu compraria carros das seguintes marcas:
//     ${indice + 1}) ${nome}`)

// }

// marcas.forEach(impressao)

marcas.forEach((nome, indice) => console.log(`${indice}).${nome}`))


const carro = {
    cor: 'branca',
    motorizacao: 2.0,
    estilo: 'coupe'
}

// for(atrib in carro) {
//     console.log(atrib)
// }

carro.forEach(impressao)

const notas = [1.2, 5.5, 9.6, 7.2, 8.8, 4.4, 3.6, 4.5, 8]

let notasBaixas = []
let notasAltas = []

// for(i in notas) {
//     if(notas[i] < 7) {
//         notasBaixas.push(notas[i])
//     } console.log(notasBaixas)
// }

setInterval(notas.forEach(function(nota) {
    if (nota > 7) {
        notasAltas.push(nota)
    }
}),

console.log(notasAltas)

