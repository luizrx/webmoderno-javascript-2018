const samira = {cabelo: 'azul', calcinha: 'rosa', sutian: 'lilás', endereco:{
    rua: 'América',
    numero: 615,
    bairro: 'Centro'
}}

// console.log(samira)

// const {cabelo: cabeleira, calcinha: rabo} = samira

// console.log(cabeleira, rabo)



const raphael = {
    estado: 'casado',
    filhos: 1,
    profissao: 'piloto',
    endereco: {rua: 'América',
numero: 615, 
bairro: 'centro'}
}

console.log(raphael)

var {estado: civil, filhos: filiacao, profissao: hobbie, endereco: {rua: logradouro, bairro: jardim}} = raphael

console.log('civil/hobbie/endereco', civil, hobbie, logradouro, jardim)

console.log('raphael', raphael)

var hobbie = 'encanador'

console.log('nova profissão do raphael:' , hobbie)

var trabalhador = {job: raphael.profissao, rataiada: raphael.filhos}

console.log('trabalhador', trabalhador)

const {cabelo: cabeleira, calcinha: panties, endereco: logradouro} = samira

console.log('samira:', samira)

console.log('cabeleira/panties/logradouro', cabeleira, panties, logradouro)

















