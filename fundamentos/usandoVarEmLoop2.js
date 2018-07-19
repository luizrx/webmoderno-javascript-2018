const funcs = []

for(var i=0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs[0]()
// funcs[10]() - O JS retornará erro, já que já que 'i' não pode ser igual ou maior que 10
// funcs[11]() - O JS retornará erro, já que não existe o índice 11




const teste = [];

for(let x = 0; x < 10; x ++) {

    teste.push(function() {
        console.log(x);
    })
}

teste[1]();

teste[3]();
teste[5]();
teste[7]();
teste[9]();


console.log('Math', typeof Math)

console.log('Math.random', typeof Math.random)

var joca = {
    nome: 'pluto',
    idade: 18,
    raca: 'dog alemão'
};

joca.cachorro = 'dog'

console.log(joca);

console.log('joca', typeof joca);

console.log('joca.cachorro', typeof joca.cachorro)

console.log('joca.idade', typeof joca.idade)

function Obj(nome, idade) {
    this.nome = nome,
    this.idade = idade
    this.exec = function() {
        console.log('função construtora')
    }
    }

const obj2 = new Obj('belinha', 7)
const obj3 = new Obj('Diego', 4)

console.log('Obj', Obj)

console.log('Obj()', Obj())

console.log('obj2', obj2)

console.log('obj3', obj3.exec())


function Ivana(nome, idade, cachaca) {

    this.name = nome,
    this.age = idade,
    this.drink = cachaca

}

const lula = new Ivana ('lula', 71, 'sim')

console.log('Ivana', Ivana)

console.log('lula', lula )

function Lalinha(nome, raca, cor) {
    this.apelido = nome,
    this.especie = raca,
    this.pelagem = cor
}

const Belinha = new Lalinha('Amabel', 'persa', 'vermelho')

console.log('Belinha:', Belinha)