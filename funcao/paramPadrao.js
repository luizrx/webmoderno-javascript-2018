// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;

}

console.log(soma1(), soma1(3), soma1(2,3), soma1(1, 2, 3), soma1(0, 0, 0))

// ** Observe que, ao atribuirmos os valores 'zero' como parãmetros, a função retornou o valor padrão, ou seja, o número 'um' para cada parâmetro

// estratégias 2, 3 e 4 para gerar valor padrão

function soma2(a, b, c) {
  
    a = a !== undefined ? a : 1 

    // No primeiro caso, se quisermos testar também parâmetros 'null', basta substituirmos o operador de comparação por '!='
  
    b = 1 in arguments ? b : 1

    // Neste segundo caso, estamos varrendo os parâmetros e comparando o segundo índice (1) do array arguments.

    c = isNaN(c) ? 1 : c

    // é a melhor das três estratégias, obviamente, caso optemos por não utilizar o valor padrão trazido pelo ECMA 2015

    return a + b + c
}

console.log(soma2(), soma2(3), soma2(2,3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do ES2015


function soma3(a =1, b = 1, c = 1) {

    return a + b + c

}

console.log(soma3(), soma3(3), soma3(2,3), soma3(1, 2, 3), soma3(0, 0, 0))


// OBS: Esta estratégia é adequada para utilização em parâmetros de função. Caso queiramos atribuir um valor padrão à variáveis, devemos utilizar a primeira estratégia: var a = a || 1



