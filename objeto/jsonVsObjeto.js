// Funções não podem ser inseridas dentro de uma notação no formato JSON
// É um formato textual que não carrega nenhuma característica específica de um sistema
// É utilizado para permitir a interoperabilidade entre tecnologias diferentes (linguagens)
const obj = { a: 1, b: 2, c: 3, soma() {return a + b + c}} 
console.log(JSON.stringify(obj))  // A função será ignorada

// console.log(JSON.parse(" a:1, b: 2, c:3}"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // todos os atributos devem ser delimitados por aspas duplas ("")
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": { "nome": "roberto", "idade": 38}, "e": [] }')) // qualquer texto dentro do JSON também deve ser delimitado por aspas duplas