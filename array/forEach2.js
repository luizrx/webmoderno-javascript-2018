const aprovados = [ 'Roberto', 'Clara', 'Eduardo', 'Márcio', 'Alexandre']


// Criando uma nova função 'forEach'

Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}


aprovados.forEach2(function(aprovado, indice, array) {
        console.log(`${aprovado} é a ${indice + 1}ª pessoa mais inteligente do mundo`)
        console.log(array)
})
