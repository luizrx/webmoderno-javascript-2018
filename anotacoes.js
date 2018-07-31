function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

tag('escola', 'atoa', 'bigia', 'estribo')

const obj = {
    nome: 'Roberto',
    idade: 38,
    altura: 1.79
}

const arrai = ['laurencio', 'carlos', 'daniel', 'roberto']

for(let i in arrai){

    console.log(arrai[i])

}



for(let letra of 'papalelepípedo') {

    console.log(letra)

}

const assuntosEcma = ['Map', 'Reduce', 'Promise']

for(let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map ([
    [ 'Map', {abordado: true}],
['Reduce', {abordado: true}], ['Promisse', {abordado: false}]
])

console.log(assuntosMap)

[assunto, valor] = assuntosMap.entries()

console.log('Assunto: ', assunto)
console.log('Valor: ', valor)

// for(let assunto of assuntosMap) {
//     console.log(assunto)
// }

// for(let assunto of assuntosMap.values()) {
//     console.log(assunto)