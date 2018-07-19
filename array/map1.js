// o map não causa alterações no array original
// o map gera um novo array

const nums = [ 1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(num) {
    return num * 5
})

console.log(resultado)

const teste = []

const each = nums.forEach(function(numero) {
   teste.push(numero * 56)
})

console.log(teste)

pot5 = num => num * 50

divide10 = num => num / 10

paraDinheiro = num => `R$ ${parseFloat(num).toFixed(2).replace('.',',')}`

let conta = nums.map(pot5)

console.log(conta)

let conta1 = nums.map(pot5).map(divide10)

console.log(conta1)

let conta2 = nums.map(pot5).map(divide10).map(paraDinheiro)

console.log(conta2)

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

const preco = []

carros.map(function(modelo, indice) {
    preco.push(parseFloat(carros[indice].preco * 2).toFixed(2).replace('.',','))
})

console.log(preco)

// const decimal = []

// dobro.forEach(function(numero) {
//    decimal.push(parseFloat(numero).toFixed(2))
// })

// console.log(decimal)

console.log(carros.map( marca => marca.fabricante))

