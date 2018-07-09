const alunos = [
    {nome: 'João', nota: 2.3, bolsista: true},
    {nome: 'Paulo', nota: 7.3, bolsista: true},
    {nome: 'Laurencio', nota: 6.5, bolsista: false},
    {nome: 'Roberto', nota: 8.8, bolsista: true},
    {nome: 'Carlos', nota: 9.1, bolsista: true},
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = function (resultado, bolsista) {
    console.log(resultado, bolsista)
    return resultado && bolsista
}

console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsitas?

const algumBolsista = function(resultado, bolsista) {
    return resultado || bolsista
    console.log(resultado, bolsista)
}

//console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista))


for(let i = 0; i < alunos.length; i++) {

    console.log('O valor da nota obtida pelo aluno ' + alunos[i].nome + ' foi ' + alunos[i].nota)
}