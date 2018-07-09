const produtos = [
    { nome: 'Notebook', preco: 2499.00, fragil: true },
    { nome: 'Ipad Pro', preco: 4199.00, fragil: true },
    { nome: 'Pedra', preco: 2600.00, fragil: false},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(function(produto) {
//     return produto.preco > 1500
// }))


// const catalogo = produtos.filter(function(prod){
//     return prod.fragil === false

// })

const maior2500 = produtos => produtos.preco >= 2500

const fragil = produtos => produtos.fragil /* == true */ // Não é necessário fazer a comparação caso estejamos buscar um resultado verdadeiro : 'true'

console.log(produtos.filter(maior2500))

console.log(produtos.filter(maior2500).filter(fragil))


const caro = produto => produto.preco > 500.00

const barato = produto => produto.preco < 900.00

const catalogoCaro = produtos.filter(caro)

const banana = produtos.filter(barato)

console.log('Produtos caros: ', catalogoCaro)

console.log('Produtos a preço de banana: ', banana)

console.log('O produto selecionado é o ' + banana[1].nome + ', que custa R$ ' + banana[1].preco)

console.log()


console.log(catalogo)

const catalogo2 = [ 7.0, 5.0, 8.0, 9.5 ]

const teste = catalogo2.filter(function(nota) {
    return nota > 5

})

console.log(teste)