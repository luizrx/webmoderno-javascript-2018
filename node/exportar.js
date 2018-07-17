console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports = 3

exports = null
console.log(module.exports)

// Apesar de 'this', 'exports' e 'module.exports' apontarem para a mesma referência, somente 'module.exports' será exportado para outros módulos.

exports = {
    nome: 'teste'
}

console.log(module.exports) // mesmo tendo sido alteradas as referências de module.exports por duas vezes (linhas 8 e 13/15), a chamada de module.exports continuará retornando { a = 1, b = 2, c = 3}

module.exports {  // Sempre que precisarmos atribuir um novo objeto ao conteúdo a ser exportado, devemos usar module.exports
    público: true
}

