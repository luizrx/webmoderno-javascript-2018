
const avaliacao = function (nota) {
    
    switch(Math.ceil(nota)) {
        
    case 1:
    console.log('bobo');
    break;

    case 2:
    console.log('indecente');
    break;

    default:
    console.log('Vá para sua casa!');
        
    }

    console.log('fim');
    
}    

console.log(avaliacao(2.9))

console.log(avaliacao(1))

console.log(avaliacao(4))



