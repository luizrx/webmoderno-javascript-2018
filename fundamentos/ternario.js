const resultado = nota => nota >= 7 ? 'aprovado': 'reprovado'

console.log(resultado(6))

const status = function(nota) {
    if(nota >= 7) {
        return 'Aprovado'
    } return 'Reprovado!'
}

console.log(status(8))


var teste = 1;

if(teste)
console.log('oba');

if (teste) {
    console.log('Assim também funciona');
}

let a = 123

global.b = 123
this.c = 456
this.d = 'teste'
this.e = {carro: 'fox',
cor: 'branca',
function() {
    console.log('ola!')
}}


console.log(a)

console.log('global a:', global.a)

console.log('this a:', this.a)

console.log(global.b)

console.log(this.c)

console.log(module.exports)

console.log(module.exports === this)

console.log(module.exports === global)

newFunction();

function newFunction() {
    console.log(this === global);
}

function capturarErro(erro) {
    throw {
        cod: erro.nome,
        data: erro.data
    }
    }


const car = {
    name: 'veloster'
}

function exibirNomeDoCarro(car) {
    try {
        console.log(car.name.toUpperCase())
    }
    catch(e){
        capturarErro(e)
    } finally {
        console.log('deu tudo certo!')
    }
}

exibirNomeDoCarro(car)