class Pessoa {
    constructor(nome) {
       this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }

}

const p1 = new Pessoa('João')
p1.falar()
console.log(p1)

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Jonas')
p2.falar()


const people  = {
    nome: 'roberto',
    idade: 38,
    falar() {console.log('Meu nome é ' + this.nome)}

}


console.log(people)
people.falar()



class Gente {
    constructor (nome, idade) {
        this.nome = nome
        idade = idade
    }

    falar () {
        console.log('Meu nome é ' + this.nome)
    }
}

const roberto = new Gente('roberto', 28)

console.log(roberto)

roberto.falar()

console.log(typeof roberto.falar)

function Person (nome, idade) {
    return {
        nome: nome,
        idade: idade,
        falar() {console.log('Meu nome é ' + nome)}
    }
}

const eduardo = new Person('eduardo', 27)

eduardo.falar()


function falar() {
    console.log('Meu nome, a partir da função externa, é ' + this.nome)
}

function criarGente(nome, idade) {
    return {
        nome,
        idade,
        falar
    }
}

const bruno = criarGente('bruno', 22)
bruno.falar()

console.log(bruno)