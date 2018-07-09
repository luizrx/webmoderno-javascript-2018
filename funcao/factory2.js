function criarProduto(nome, preco) {
    return {
       nome,
       preco,
       desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199,49))
console.log(criarProduto('Ipad', 1899,49))
console.log(criarProduto('Macbook Pro', 5199,49))


function criarPessoa(nome, age) {
    return {
        nome: nome,
        age: age
    }
}

console.log(criarPessoa('Roberto', 38))

