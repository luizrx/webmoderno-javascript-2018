const pessoa = {
	saudacao: 'Bom dia!',
	falar() {
		console.log(this.saudacao)
	}
}


pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// caso criemos uma constante 'saudacao', e expressão não retornará erro, desde que o 'this' seja eliminado da função.


const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()



