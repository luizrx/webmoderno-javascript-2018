let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

console.log('Os verdadeiros...')
console.log(!isAtivo)
console.log(!!isAtivo)
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!!' ') // espaço vazio
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // No caso das atribuções, o resultado dependerá do valor atribuído

console.log('Os falsos...')
console.log(!!0)
console.log(!!'') // string vazia (diferente de espaço em branco)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || 'epa' || 123))
console.log(('' || null || 0 || 'epa' || 123))


let nome = ''
console.log(nome || 'Nome não preenchido') // o resultado será 'nome não preenchido', já que o valor atribuído à variàvel 'nome' é falso.

let name = 'Lucas'
console.log(name || 'Nome não preenchido') // Aqui o resultado será 'Lucas', já que a variável 'name' recebeu um valor verdadeiro


