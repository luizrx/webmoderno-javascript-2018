var a = 3
let b = 4


/* Regra geral: prefira criar variáveis usando 'let', que é 
uma forma mais moderna de codificar */

var a = 30
// let b = 40

console.log(a, b)

/*

let b = 40
    ^
SyntaxError: Identifier 'b' has already been declared
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:607:28)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3
    */

var a = 30
b = 40

console.log(a,b)

const c = 5

// c = 50
console.log(c)

/* c = 50
  ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (C:\laragon\www\web-moderno-javascript\exercicios-js\fundamentos\variaveisEconstantes.js:37:3)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
    at Function.Module.runMain (module.js:684:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:608:3


*/ 

// Constantes não podem ter a atribuição de novos valores


let qualquer = 'legal'

console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.15
console.log(qualquer)