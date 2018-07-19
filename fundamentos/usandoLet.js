let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// No caso da palavra-chave 'let', existe escopo específico para o bloco.


let bloco = 100
{
    let bloco2 = 200
    console.log('dentro =', bloco)
}
console.log('fora =', bloco)

// Neste caso, a variável 'bloco' não está definida dentro do bloco. 
// Assim, o 'console' irá chamar a variável 'bloco' mais próxima, que está fora do bloco.



let number = 5

function myFunction() {
    let number = 6
    console.log('dentro =', number)
}
console.log('fora =', number)
console.log(myFunction())



let num = 3

function myFunction2() {
    num = 7                 // a variável foi declarado sem a palavra-chave 'let', tornando-a de escopo global
    console.log('dentro = ', num)
}
console.log('fora =', num)
console.log(myFunction2())
console.log(num)


// Variáveis definidas com a palavra-chave 'let' tem escopo global, escopo de função e escopo de bloco.