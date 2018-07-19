const alunos = [
    {nome: 'João', nota: 2.3, bolsista: false},
    {nome: 'Paulo', nota: 7.3, bolsista: true},
    {nome: 'Laurencio', nota: 6.5, bolsista: false},
    {nome: 'Roberto', nota: 8.8, bolsista: true},
    {nome: 'Carlos', nota: 9.1, bolsista: false},
]

const resultado = alunos.map( aluno => aluno.nota)



// const resultado = alunos.map(function(aluno){
//     return aluno.nota
// })

// 

const resultadoReduzido = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual) {

    console.log(acumulador, atual)
    return acumulador + atual

}, 0)

const resultadoReduzido10 = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual) {
    
    console.log(acumulador, atual)
    return acumulador + atual

}, 10)

const resultadoReduzidoArray = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual) {
    
    console.log(acumulador, atual)
    return acumulador + atual
    
}, [])


console.log(resultadoReduzido)
console.log(resultadoReduzido10)
console.log(resultadoReduzidoArray)




const obejeto = [{ marca: 'ford', cor: 'prata', preco: 25000.00 },
                    {marca: 'vokswagen', cor: 'branca', preco: 35000.00 },
                    {marca: 'ford', cor: 'preta', preco: 25200.00 },
                    {marca: 'fiat', cor: 'vermelho bordeaux', preco: 39000.00 },
                    {marca: 'gm', cor: 'azul petróleo', preco: 69000.00 },
                    {marca: 'hiunday', cor: 'preto', preco: 57000.00 },
                    {marca: 'toyota', cor: 'rosa', preco: 99000.00 }]

//console.log(obejeto)

const mapear = obejeto.map(nome => nome.preco)


const arrai1 = [3, 4, 5, 6]

const arrai2 = [ 6 , 7]

const arrai0 = [ 0, 1, 2]

const arrai = []

arrai.push(arrai0, arrai1, arrai2)

console.log(arrai)


console.log(arrai.reduce((acumulador, atual) => acumulador + atual))


console.log(mapear)

console.log(mapear.reduce((function(acumulador, atual) {return acumulador + atual; console.log(acumulador, atual)}), 1000000))



