const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1)
console.log(pai)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
console.log('filha2:', filha2)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))  // se o atributo 'nome' não tivesse sido nomeado (linha 4), não seria listado por padrão, mesmo sendo conferido à filha1 por herança
console.log(Object.keys(filha2))  // o atributo 'nome' é demonstrado somente se a propriedade 'enumerable' estiver setada 'true'

for(let key in filha2) {  // quando usamos o atributo 'key', são enumerados todos os atributos, inclusive
    console.log(key)                       // aqueles recebidos por 'herança'
}

for(let key in filha1) {
    console.log(key)
}


// também podemos usar o método 'hasOwnProperty' para enumerarmos os atributos próprios e aqueles recebidos por herança
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log('Atributo próprio:', key) : console.log('Por herança, \'filha2\' recebe:', key)
}

for(let key in filha1) {
    filha1.hasOwnProperty(key) ?
    console.log('Atributo próprio:', key) : console.log('Por herança, \'filha1\' recebe:', key)
}

console.log('teste de digitar')

var meter = 'sexo'

console.log(`Hoje é dia de ${meter}`)

console.log('eu amo meu pequeno pepe')


console.log('o gatinho mais amado do universo!')

console.log('O laurencio ira caminhar tambem')