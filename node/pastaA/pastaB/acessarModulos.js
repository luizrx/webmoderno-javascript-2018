const moduloA = require('../../moduloa') // o comando irá funcionar, em que pese o arquivo original estar grafado com letra maiúscula. OBS: Não irá funcionar no linux!
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index') // Como estamos importando o módulo contido no arquivo index.js, não é necessário referenciar o nome do arquivo ('./pastaC)
console.log(c.ola2)

// Além do módulo salvo no arquivo index.js, é possível importar módulos que já vem previamente instalados com o node (módulos core) ou módulos que estejam salvos na pasta node_modules, sem a necessidade de informar os caminhos relativo ou absoluto
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)