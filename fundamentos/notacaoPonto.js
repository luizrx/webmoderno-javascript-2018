console.log(Math.ceil(6.1))  // Para acessar funções dentro de objetos

const obj1 = {}
obj1.name = 'Roberto'  // Para criar chaves(atributos) dentro de objetos
obj1['idade'] = 38  // também podde ser usado para criar chaves dentro de objetos

console.log(obj1.nome) // para acessar chaves dentro de objetos
console.log(obj1.idade)
console.log(obj1)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("fufufuu")
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('sapato')

console.log(obj2)
console.log(obj3) 
obj3.exec()

console.log('tipo do Obj:', typeof Obj)
console.log('tipo do obj2:', typeof obj2)




