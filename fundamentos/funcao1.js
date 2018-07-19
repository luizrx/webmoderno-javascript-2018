// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) // a função, embora contendo dois parâmetros, vai funcionar quando somente um for informado, retornando NaN
imprimirSoma(2, 5, 4, 8, 3) // Como a função tem somente dois parâmetros, o JS vai ignorar os três últimos números
imprimirSoma()

// função com retorno
function soma(a, b=1) { // neste caso, o valor padrão de 'b' foi setado como 1.
    return a + b
}


console.log(soma(2, 7))
console.log(soma(4))
console.log(soma()) // sem argumentos, o JS retornará NaN