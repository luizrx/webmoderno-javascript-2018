
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a
console.log(dobro(Math.PI))

// A função arrow sempre será uma função anônima, mas podemos armazená-la em variáveis, de modo a podemos reutilizá-las
// Caso não coloquemos as declarações em bloco '{}', o return será implícito, mas se o colocarmos, o return é obrigatório

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // ola = _ => 'Olá'
console.log(ola())