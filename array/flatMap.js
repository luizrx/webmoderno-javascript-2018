const unidadeRegional = [{
        nome: 'Equipe 1',
        agentes: [{
            nome: 'João',
            nota: 8
    }, { 
            nome: 'Daniel',
            nota: 7
    },{
            nome: 'Adriano',
            nota: 9
        }]}, { 
        nome: 'Equipe 2',
        agentes: [{
            nome: 'Neto',
            nota: 9.5
        }, {
            nome: 'Paulo',
            nota: 9.8
        }]}, {
        nome: 'Equipe 3',
        agentes: [{
            nome: 'Roberto',
            nota: 9.5
        }, { 
            nome: 'Hércules', 
            nota: 9.75 
        }, { 
            nome: 'Laurencio', 
            nota: 6.5 }]
    }
]

console.log(unidadeRegional)

console.log(unidadeRegional[1].agentes[1])

const getNotaDoAgente = agente => agente.nota

const getNotaNasEquipes = equipes => equipes.agentes.map(getNotaDoAgente)

console.log(unidadeRegional.map(getNotaNasEquipes)) 

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const regional = unidadeRegional.flatMap(getNotaNasEquipes)

console.log(regional)



