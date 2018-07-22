const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', ' ')

        process.stdout.write('Fala ' + nome + '!')
        process.exit()
    })
}

const funcionario = { nome: 'Roberto', idade: 38}

const remocao = {cargo: 'Agentes de Fiscalização', ...funcionario }

console.log(remocao)

const transfer = {cargo: 'Agente de Fiscalizacao', funcionario}

console.log(transfer)

function (nome = 'anônimo', idade = 18) {
    return {
   nome: nome,
    idade: idade

}}

console.log(Servidor)

const roberto = new Servidor('roberto', 19)

console.log(roberto.nome)


