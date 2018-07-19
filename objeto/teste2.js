class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
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

    // addLancamentos(...registros) {
    //     registros.forEach(name =>
    //         this.lancamentos.push(name))    
    // }

    addLancamentos(...registros) {
        registros.forEach(function(name) {
           this.lancamentos.push(name)
        })
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(function(inscricao) {
            valorConsolidado += inscricao.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('salario', 55000)
const contaDeLuz = new Lancamento('Luz', -220)
const julho2018 = new CicloFinanceiro(7, 2018)

julho2018.addLancamentos(salario, contaDeLuz)
console.log(julho2018.sumario())

console.log(julho2018.lancamentos)
console.log(salario)
console.log(typeof salario)
console.log(julho2018)