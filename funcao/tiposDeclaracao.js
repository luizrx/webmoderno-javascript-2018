// function declaration

/* Nos casos envolvendo 'function declaration', é possível utilizá-las antes da declaração da própria função, eis que o interpretador irá realizar o 'hoisting' dessas funções, o que não ocorre no caso das 'function expression' nem no caso das 'named function expression'. */

console.log(soma(3,4))

function soma(x, y) { 

    return x + y

}


// function expression

// console.log(sub(9,4))  -- Erro, já que sua chamada foi anterior à declaração

const sub = function(x, y) {

    return x - y

}


// named function expression

// console.log(mult(9,2))  -- Erro, já que sua chamada foi anterior à declaração

const mult = function mult(x, y) {

    return x * y

}