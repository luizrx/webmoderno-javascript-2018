let valor // não inicializada 
console.log(valor)


valor = null  // ausência de valor
console.log(valor)

// console.log(valor.toString())  // Erro!
// Atenção: se a variável está null ou undefined, não é possível acessar nada nela (função, método, atributo)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // o resultado ser falso, já que undefined é false
// delete produto.preco -> o resultado será objeto vazio - {}
// Preferencialmente, para excluir atributos dentro de objetos, devemos usar o método delete.
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) /// null também é false
console.log(produto.preco)
console.log(produto)

