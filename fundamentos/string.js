const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))  // como não existe o índice, o javascript irá retornar "vazio"
console.log(escola.charCodeAt(2)) // retorna o valor da letra "d" na tabela unicode
console.log(escola.indexOf('o')) // retorna o índice associado à letra "o"

console.log(escola.substring(1)) // retorna a string a partir do índice "1"
console.log(escola.substring((1, 3))) // retorna a string a partir do índice "1", contando até o limite do índice "3"

console.log('Escola '.concat(escola).concat("!")) // como podemos observar, a concatenação pode ser feita com literais
console.log('Escola ' + escola + "!") // o resultado é o mesmo que o da instrução acima
console.log(escola.replace('o', 'e')) // irá substituir a letra indicada ('o') pela letra 'e'

console.log('Ana, Maria, Pedro'.split(',')) // para transformar uma string dividida em vírgulas em um array
