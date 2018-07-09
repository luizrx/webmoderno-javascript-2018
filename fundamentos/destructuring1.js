// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa)

const { nome, idade } = pessoa
console.log(nome, idade)
console.log(pessoa)

const {nome: sapopemba, endereco: caralho } = pessoa
console.log(sapopemba)
console.log( caralho)

const {sobrenome, sapato = 'chicana'} = pessoa
console.log(sobrenome, sapato)

const{endereco: {logradouro, numero, cep = true}} = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag,num) // erro, já que estamos tentando acessar um atributo que não existe na constante