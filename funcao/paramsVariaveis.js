
const teste = function() {

    let soma = 0;

    for(i in arguments) {

       soma += arguments[i]
               
    } return soma
   
}

console.log('1) ' + teste())
console.log('2) ' + teste(0))
console.log('3) ' + teste(10, 2))
console.log('4) ' + teste(2, 3, 7))
console.log('5) ' + teste(1.7, 2.3, 10.500))


