const contadorA = require('./instanciaUnica') // quando importamos um módulo a partir do uso do require, por padrão, ele é cacheado pelo
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // os parênteses são essenciais, uma vez que estamos invocando uma função factory
const contadorD = require('./instanciaNova')()
// se quisermos contornar o cacheamento realizado automaticamente pelo node, podemos gerar um novo objeto a partir de uma função factory, ao invés de importá-lo por meio do require.


contadorA.inc() // lembrando que a função 'inc' irá incrementar 1 à variável
contadorA.inc()
console.log(contadorB.valor) // o que for feito no contadorA será refletido no contadorB, uma vez que no node faz cache
console.log(contadorA.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
// o contadorD não foi alterado, uma vez que as alterações foram feitas somente no contadorC.