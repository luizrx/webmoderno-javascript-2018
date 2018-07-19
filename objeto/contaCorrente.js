

// class Lancamento {
//     constructor(nome = 'categoria', valor = 0) {
//         this.nome = nome
//         this.valor = valor
//     }
// }

function Lancamento(nome, valor) { // função factory
      return {
        nome,
        valor   
    }
}

class fluxoFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

addLancamentos(...lancamentos) {
    lancamentos.forEach(contas => this.lancamentos.push(contas))
    console.log('addLancamentos(conta => lançamentos:', lancamentos)
}

resumo() {
    let consolidacao = 0
    this.lancamentos.forEach(contas => {
        consolidacao += contas.valor
        console.log('resumo(consolidação):', consolidacao)
    })
    return consolidacao
    }
}


const salario = new Lancamento('dindin', 15000)
const unimed = new Lancamento('unimed', -184)
const aluguel = new Lancamento('aluguel', 2350)
const emprestimo = new Lancamento('bradesco', 3200)

const contaCorrente = new fluxoFinanceiro(6, 2018)
const julho2018 = new fluxoFinanceiro(7, 2018)

julho2018.addLancamentos(salario, aluguel, emprestimo)
contaCorrente.addLancamentos(salario, unimed, aluguel, emprestimo)
console.log(contaCorrente.resumo())
console.log('O fluxo finaneiro em ' + contaCorrente.mes + '/' + contaCorrente.ano + ' é igual a ' + contaCorrente.resumo())
console.log('O fluxo finaneiro em ' + julho2018.mes + '/' + julho2018.ano + ' é igual a ' + julho2018.resumo())
console.log(salario)

