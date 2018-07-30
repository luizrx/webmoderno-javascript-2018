const aprovados = [ 'Roberto', 'Clara', 'Eduardo', 'Márcio', 'Alexandre']


// A função a ser inserida no 'forEach' sempre será anônima

aprovados.forEach(( valor, indice ) => {

    console.log('O ' + valor + ' é a ' + (indice + 1) + 'ª pessoa mais linda do mundo!' )

})

const carros = [{
    fabricante: 'ford',
    modelo: 'fiesta',
    cor: 'prata'
}, {
    fabricante: 'fiat',
    modelo: 'argo',
    cor: 'branco'
}, {
    fabricante: 'chevrolet',
    modelo: 'cruze',
    cor: 'preto'
}, {
    fabricante: 'volkswagen',
    modelo: 'jetta',
    cor: 'verde'
}]

carros.forEach(( caracteristica, indice ) => {

    console.log('O modelo ' + carros[indice].modelo + ' é fabricado pela montadora ' + carros[indice].fabricante)

})

