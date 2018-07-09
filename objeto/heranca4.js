function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

// Quando criamos um objeto a partir de uma função construtora,
// o atributo '__proto__' aponta para o atributo '.prototype' daquela função,
// e não 'Object.prototype', o que ocorre quando criamos o objeto a 
// partir de 'new Object' ou a partir de um objeto literal.
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__) 



MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log('Bom dia! Meu nome é', this.nome )
}

console.log('\'obj1:\'', obj1, '\'obj2:\'', obj2)

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

for(let key in obj1) {
    console.log(key)
}

const obj3 = {} // criação de objeto literal
obj3.__proto__ = MeuObjeto.prototype

console.log(obj3)

for(let key in obj3) {
    console.log(obj3)
}

obj3.nome = 'Samuelson'

obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
console.log(Object.prototype.__proto__ !== undefined)


