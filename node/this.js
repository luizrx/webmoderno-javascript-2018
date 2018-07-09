console.log(this === global) // false
console.log(this === module) // false => this é um objeto e é referência para module.exports
console.log(global === module) // true

console.log(this === module.exports) // true => this, fora de uma função, aponta para module.exports
console.log(this === exports) // true
console.log(exports === module.exports) // true

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // false
    console.log(this === module.exports) // false
    console.log(this === global) // true => Dentro de uma função, this aponta para 'global'

    this.perigo = '...' // esse this está sendo inserido no escopo global
}

this.perigo = '...' // esse this está sendo inserido no module.exports, e será visível fora do módulo (público)

logThis()