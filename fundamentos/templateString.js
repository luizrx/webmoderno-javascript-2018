const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const teste = `  
     Olá            
     ${nome}!`

// é possível quebras de linhas dentro de template strings
console.log(concatenacao, template) 

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei ... ${up('cuidado')}!`)

let x = 10
let y = 20

console.log(`A soma entre ${x} e ${y} é igual a ${x + y}!`)

