const aprovados = [ 'Roberto', 'Clara', 'Eduardo', 'Márcio', 'Alexandre']


// A função a ser inserida no 'forEach' sempre será anônima

aprovados.forEach(function(aprovado, indice, array) {
        console.log(`${aprovado} é a ${indice + 1}ª pessoa mais inteligente do mundo`)
        console.log(array)
})


// aprovados.forEach(nome => console.log(nome))


// const melhores = function (aprovado, indice, array) {
//     console.log(`${aprovado} é a ${indice + 1}ª pessoa mais inteligente do mundo`)
//     console.log(array)
// }

// aprovados.forEach(melhores)

// Usando forEach' para percorrer

const carros = [{
    fabricante: 'ford',
    modelo: 2000,
    cor: 'prata'
}, {
    fabricante: 'fiat',
    modelo: 2015,
    cor: 'branco'
}, {
    fabricante: 'chevrolet',
    modelo: 2018,
    cor: 'preto'
}, {
    fabricante: 'volkswagen',
    modelo: 2016,
    cor: 'verde'
}]

// console.log(carros)

// console.log('fiat?', carros[1])

console.log('Quem é o fabricante?', carros[1].fabricante)

// var modelo = function(carro, indice) {
//     console.log('O veículo selecionado é fabricado pela montadora ' + carros[indice].fabricante)
// }

// carros.forEach(modelo)

carros.forEach((nome, indice, array) => console.log('O carro escolhido pelo cliente é o ' + carros[indice].fabricante))

