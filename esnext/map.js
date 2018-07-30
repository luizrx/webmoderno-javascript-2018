

const pessoas = [ 'roberto', 'eduardo', 'carol', 'thais', 'geni']

console.log(pessoas)

pessoas.map((gente ) => {
    console.log(gente)
})


pessoas.map( function (individuos) {
    console.log('Os nomes dos elementos denunciados são ' + individuos)
})

const numeros = [ 1, 2, 3, 4, 5 ]

var multiplicacao = numeros.map(( num ) => {

    return num * 10

})

console.log(multiplicacao)

const numeral = numeros.map((xis) => { 
    
    return 1000 * xis })

console.log(numeral)


const paraDinheiro = numeros.map((num => {

    return 'R$ '+ parseFloat(num * 1000).toFixed(2).replace('.',',')

}))

console.log(paraDinheiro)

pot3 = num => num * 3

divide10 = num => num / 10

const potencia = numeros.map(pot3)

console.log(potencia)

const centena = numeros.map( num => num * 100)

const dezena = numeros.map( num => num * 100).map(divide10)

console.log(centena)


const carros = [{
    fabricante: 'ford',
    preco: 2000,
    cor: 'prata'
}, {
    fabricante: 'fiat',
    preco: 3500,
    cor: 'branco'
}, {
    fabricante: 'chevrolet',
    preco: 8200,
    cor: 'preto'
}, {
    fabricante: 'volkswagen',
    preco: 6700,
    cor: 'verde'
}]

const precoComDesconto = precinho => precinho*indice

let desconto = 0.15

let indice =  parseFloat(1 - desconto)

const tabelaDePrecos = carros.map(( veiculos ) => {
    return parseFloat(veiculos.preco).toFixed(2)}
)

console.log(tabelaDePrecos)

const novo = tabelaDePrecos.map(precoComDesconto)

console.log(novo.toFixed(2))

