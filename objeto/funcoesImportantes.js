const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// Object.entries(pessoa).forEach(e => {
//     console.log(`$e[0]}: ${e[1]}`)
// })

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
   
    enumerable: true,
    writable: false,
    value: '01/01/2019'

})

pessoa.dataNascimento = '01/01/2017' // O valor não será alterado, já que a propriedade está definida com
console.log(pessoa.dataNascimento)   // o valor 'writable' = false.
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const dest = { a: 1, e: 5} // O valor de 'a' será sobrescrito pelo valor de 'a' da constante 'o2'
const o1 = { b: 2}
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

console.log(dest)
console.log(obj)

Object.freeze(obj)
obj.c = 1234 // O valor do objeto 'c' não será alterado, haja vista a propriedade 'freeze' que lhe foi
console.log(obj)    // atribuída.


var arraia = ['paçoca', 'milho-verde', 'pipoca']

arraia.forEach((item, index) => {
    console.log('A barraca ' + index + ' irá servir ' + item)
})

const junina = {
    carol: 'pipoca',
    rita: 'quentão',
    laurencio: 'cachorro-quente'
}

// console.log(junina)


console.log(Object.entries(junina))

Object.entries(junina).forEach((e) => {
    console.log('A ' + e[0] + ' irá ficar na barraca do ' + e[1])
})

// Usando o destructuring

Object.entries(junina).forEach(([chave, valor]) => {
    console.log('A ' + chave + ' irá ficar na barraca do ' + valor)
})