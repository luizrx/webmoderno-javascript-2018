 // coleção dinâmica de pares chave/valor
 const produto = new Object
 produto.nome = 'Cadeira'
 produto['marca do produto'] = 'Generica'
 produto.preco = 220
  
 console.log(produto)

 delete produto.preco
 delete produto['marca do produto']

 console.log(produto)


 const teste1 = new Object
 const teste2 = {}

 console.log('teste1: ', teste1)
 console.log('teste2: ', teste2)

 const carro = {

    modelo: 'A4',
    valor: 89000,

    proprietario: {

     nome: 'Raul',
     idade: 56,
     endereco: {

         logradouro: 'Rua ABC',
         numero: 123

         }
    },

 condutores: [{

     nome: 'Junior',
     idade: 19

     }, {
 
     nome: 'Ana',
     idade: 42
        }
    ],

 calcularValorSeguro: function() {

    }
}

// console.log(carro)

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

// console.log(carro)

carro.condutores.push({nome: 'Ismael', // operação possível, já que condutores é um 'array'
idade: 65})

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) // retornara 'undefined', já que o atributo foi excluído anteriormente
console.log(carro.condutores.length) // erro: não é possível acessar a propriedade de um atributo inexistente

