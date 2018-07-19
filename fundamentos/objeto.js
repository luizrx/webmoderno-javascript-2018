const produto1 = {}
produto1.any = 'Celular Ultra Mega'
produto1.preco = 1100.00
console.log(produto1)

produto1['Desconto super legal'] = 0.40 // evitar atributos com espaço
console.log(produto1)

const produto2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(produto2)