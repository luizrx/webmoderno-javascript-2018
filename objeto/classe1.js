// Forma alternativa às funções construtoras
// No Javascript a classe é convertida para uma função
// Usa herança por protótipos

class Lancamento {
    constructor(nome = 'Genérico', valor = 0) { // Constructor é a função chamada quando instanciamos essa classe a partir do operador 'new'
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
}

addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
    }

sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
        valorConsolidado += l.valor
    })
    return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

