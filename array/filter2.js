Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(i = 0; i < this.length; i ++) {
       if(callback(this[i], i, newArray)) {
        newArray.push(this[i])
       }
    }  return newArray
}


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

console.log(produtos.filter2(maior2500))

console.log(produtos.filter2(maior2500).filter(fragil))