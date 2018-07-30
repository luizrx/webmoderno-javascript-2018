// let e const

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
// console.log(b) - O JS entende que a variável não está definida

// Template String

const produto = 'Ipad'
console.log(`${produto} é    
caro!`)                         

// Destrucuring
const [l, e, ...tras] = "Cod3r"

console.log('l: ', l)
console.log('e: ', e)
console.log('lras: ', tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const [a, , c, d] = [1, 2, 3, 4]
console.log('a', a) // 1
console.log('c', c) // 3
console.log('d', d) // 4

const {cor, ano, marca} = { marca: 'ford', ano: 2000, cor: 'prata'}
console.log('marca:', marca)
console.log('cor:', cor)
console.log('ano:', ano)

const cliente = {
    nome: 'Roberto',
    endereco: { rua: 'América',
bairro: 'Centro',
cidade: 'Araras'},
profissao: 'Servidor Público'
}

console.log(cliente)

const {nome, endereco: { rua: logradouro }} =  cliente 

console.log(nome, logradouro)


const numeral = [ 1, 2, 3 ] 
const [ n1, n2 ] = numeral
console.log(n1, n2)

const animais = [ 'gato', 'cachorro', 'tartaruga', 'rato' ] 
console.log(animais)

const [ animal1, animal2, , animal4 ] = animais
console.log(animal1, animal2, animal4)

