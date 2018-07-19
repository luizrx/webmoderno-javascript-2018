// função contrutora
function Carro(velocidadeMaxima = 300, delta = 5) {
    
    let velocidadeAtual = 0

	this.acelerar = function () {
		if (velocidadeAtual + delta <= velocidadeMaxima) {
			velocidadeAtual += delta
		}
		else {
			velocidadeAtual = velocidadeMaxima
		}
    }
    
	this.frear = function () {
		if (velocidadeAtual - delta > 0) {
			velocidadeAtual -= delta
		}
		else {
			velocidadeAtual = 0
        }
    }

		this.getVelocidadeAtual = function () {
			console.log(`O carro está a ${velocidadeAtual} km/h!`)
		}
    }
    
	const ix35 = new Carro(220, 10)
    const hb20 = new Carro(180, 5)
    
	ix35.acelerar()
	ix35.acelerar()
	ix35.acelerar()
	ix35.acelerar()
	ix35.acelerar()
	ix35.acelerar()
	ix35.getVelocidadeAtual()
	hb20.acelerar()
	hb20.acelerar()
	hb20.acelerar()
	hb20.acelerar()
	hb20.acelerar()
    hb20.getVelocidadeAtual()
	hb20.frear()
	hb20.frear()
	hb20.frear()
    hb20.getVelocidadeAtual()
    
    console.log(velocidadeAtual)



    let Pessoa = function(nome, idade) {

        return {
            nome,
            idade
        }
    }

    console.log(Pessoa)

    const eduardo = new Pessoa('eduardo', 38)

    console.log(eduardo)
