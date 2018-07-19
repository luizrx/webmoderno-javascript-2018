var estoque = [
{nome: 'Resma de Papel A4', preco: 19.90, qtde: 300, fragil: false},
{nome: 'Monitor LG 29 IPS', preco: 1699.00, qtde: 15, fragil: true},
{nome: 'Ovos Brancos - 30 unidades', preco: 18.99, qtde: 21, fragil: true},
{nome: 'Pneu Pirelli Scorpion Aro 19', preco: 1027.34, qtde: 16, fragil: false},
{nome: 'Apple Ipad Pro 32gb - Tela 12,9', preco: 3999, qtde: 17, fragil: true}
];

console.log(estoque)

// Agora vamos filtrar os produtos 'frágeis' cujo valor é maior que 1000.00

const valorProdutosCarosEFrageis = estoque
.filter(item => item.preco >= 1000 && item.fragil)
.map(item => item.preco)
.reduce((total, preco) => total + preco)

console.log('Soma do valor dos objetos filtrados: ' + valorProdutosCarosEFrageis)

// També é possível criar variáveis com as instruções a serem inseridas no filtro, no map e no reduce

const isPrecoAlto = item => item.preco >= 1000
const isProdutoFragil = item => item.fragil
const somatorio = (total, qtde) => total + qtde

const qtdeProdutosCarosEFrageis = estoque
.filter(isPrecoAlto)
.filter(isProdutoFragil)
.map(item => item.qtde)
.reduce(somatorio)

