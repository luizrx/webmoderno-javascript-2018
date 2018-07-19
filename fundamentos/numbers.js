const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(4)) // A função 'toFixed' controla a quantidade de casas decimais a ser exibida
console.log(media.toString()) // Converter um valor numérico em uma string. 
console.log(typeof media) // Declara o tipo do dado.
console.log(typeof Number) // Number iniciando com letra maiúscula é uma função.

console.log(7 / 0) // Apresentará como resultado o tipo 'infinity'
console.log("10" / 2)
console.log("Show!" * 2)
console.log(0.1 + 0.7)
// console.log(10.toString()) // Não é possível chamar diretamente um literal concatenado com uma função
console.log((10.34545465).toFixed(2)) // É possível chamar o literal armazenado dentro de parênteses, sem que, para isso, seja necessário, antes, atribuir seu valor a uma variável.