//console.log (global) => Objeto compartilhado
global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}

// Também é possível congelar o objeto, de modo que não sejam possíves alterações no âmbito global.

// global.MinhaApp = Object.freeze({
//     saudacao() {
//         return 'Estou em todos os lugares!'
//     },
//     nome: 'Sistema Legal'
// })