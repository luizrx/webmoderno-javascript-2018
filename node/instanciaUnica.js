// node faz cache, desta forma, caso importemos o módulo para outro arquivo, ele será mantido em uma única instância
module.exports = {
    valor: 1,
    inc() {
        this.valor ++
    }
}