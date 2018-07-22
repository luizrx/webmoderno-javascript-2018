// semelhante aos objetos, mas podem ser usadas funções, objetos, numeros e arrays como chaves

const tecnologias = new Map()

tecnologias.set('react', { nome: 'roberto', idade: 38})

console.log(tecnologias.get('react'))

const lenovo = {escola: 'rufato'}

console.log(lenovo)

const marcas = new Map([['fabricantes de computadores', [{ marca: 'positivo', sede: 'manaus'}, { marca: 'ibm', sede: 'los angeles'}]]])

console.log(marcas)

console.log(marcas)

marcas.forEach((valor, chave) => console.log(valor))

var amigos = [ {nome: 'roberto',
idade: 38},
{ nome: 'daniel',
idade: 36},
{ nome: 'eduardo',
idade: 40}
]

var maes = [
    { nome: 'cida',
idade: 65}, 
{ nome: 'geni',
idade: 66},
{ nome: 'ocarlina',
idade: 63}
]

const pais = new Map( [
    [ 'roberto', { nome: 'luiz', idade: 66}], 
[ 'flávio', { nome: 'paulinho', idade: 'falecido'}]]
)

//console.log(pais)

for(let papais of pais.values()) {
    console.log(papais.idade)
}

for(let [chave, valor] of pais.entries()) {
    console.log('os valores relativos às chaves são ' + chave)
    console.log('Os valores relativos aos valores são ' + valor.nome)
}


//console.log(amigos)
console.log(maes)

maes.forEach(( valor, chave) => console.log(valor))

console.log('seleção', maes[0].idade)

maes.forEach(( valor) => console.log('idade das mamães: ', valor.idade))

for(let i in maes) {
    console.log('for i in ', i)
}


for(let i of maes) {
    console.log('for of', i)
}

x = 0;

while(x < maes.length) {

    console.log('O nome da mamãe é ' + maes[x].nome)
    x ++

}

for( i = 0; i < maes.length; i ++ ) {
    console.log('A monstra da ' + maes[i].nome + 'tem ' + maes[i].idade + ' anos de idade!')
}


