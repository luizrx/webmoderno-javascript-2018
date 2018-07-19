const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

// const paraObjeto = json => JSON.parse(json)

// console.log(paraObjeto(carrinho))

const paraObjeto = function(json) {
    return JSON.parse(json)
   }

   
const apenasPreco = function(produto) {
    return produto.preco
    }

// const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)
