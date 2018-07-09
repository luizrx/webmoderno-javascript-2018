var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// Não existe escopo específico para o bloco, diferentemente do que ocorre na função


var number = 5

function myFunction() {
    var number = 6
    console.log('dentro =', number)
}
console.log('fora =', number)
console.log(myFunction())



var num = 3

function myFunction2() {
    num = 7                 // a variável foi declarado sem a palavra-chave 'var', tornando-a de escopo global
    console.log('dentro = ', num)
}
console.log('fora =', num)
console.log(myFunction2())
console.log(num) 