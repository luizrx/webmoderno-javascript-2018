const valores = [7.7, 8.9, 6.3, 9.2 ]

console.log(valores)

console.log(valores[1], valores[2])
console.log(valores[4])

valores[6] = 'teste'

console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'texto')
console.log(valores)

console.log(valores.pop())  //  irá excluir o último valor do array. 
console.log(valores) 

valores.push('tata', 'coco')
console.log(valores)
console.log(valores.length)
delete valores[11] //  vai excluir 'coco'
delete valores[10] // vai excluir 'tata'

console.log(valores)
console.log(valores.length)