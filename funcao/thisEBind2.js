
function Pessoa() {

	idade = 0

	setInterval(function() {
		idade++
		console.log(idade)
	}, 1000)
}

new Pessoa

// Outra maneira de fazer o código, contornando as alterações de interpretação do 'this', é a utilização da constante 'self'


function Gato() {

	this.idade = 0

	const self = this // Observe que aqui está o pulo do gato!

	setInterval(function() {
		self.idade++
		console.log(self.idade)
	}/*.bind(this)*/, 1000)
}

new Gato


function Cachorro() {

	age = 0

	setInterval(() => {

	age ++

	console.log(age)

}, 1000)

}

var dog = new Cachorro






function Teste () {

		this.capiroto = []

		this.addFofoca = function(lorota){

		this.capiroto.push(lorota)

		console.log(this.capiroto)

	}
}

const fofoqueiro = new Teste

const reuso = new Teste

console.log('reuso', reuso)

reuso.addFofoca('Eu adoro falar da vida alheia')

fofoqueiro.addFofoca('lero lero')



let dobro = '';


dobro = (a, b) => {
	return a + b
}

// console.log(dobro(5, 6))

// dobro = function(a, b) {
// 	return a + b
// 	console.log(dobro)
// }

console.log(dobro(4, 6))




function soma(a, b) {

		console.log(a + b)

	}


function imprimir(fun) {

	fun()

}

soma(9,100)

