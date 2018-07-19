//Função em JS é cidadão de primeira classe! -- First class citizen!


// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function() { }

// Armazenar em um array
const array = [1, 2, function(a, b) {return a + b}, fun1, fun2]

console.log(array[2](2,3))

// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())


// Passar função como parâmetro em outra função

function fun(funcao) {
    
    funcao()

}


function xingar() {

    console.log("Vá tomar no cú!");

}

fun(xingar())

// Uma função pode retornar/conter uma outra função

function soma(a, b) {
    return function(c) {
        console.log(a + b +c)
    }
}

soma(2,3)(4)

// Também é possível atribuir a primeira função a uma variável, já com os parâmetros 

const cincoMais = soma(2,3)
cincoMais(4)