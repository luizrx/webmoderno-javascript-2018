const sequencia = {
    _valor: 1, // convenção
   
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
            
    }, 
    
    get valor() { return this._valor++ }
    
}


console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900  // O valor não será aceito, já que o método não permite voltar a sequência
console.log(sequencia.valor, sequencia.valor)