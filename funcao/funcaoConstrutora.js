// Podemos instanciar novas funções e instanciar funções

function Carro (velocidadeMaxima = 200, delta = 5) {

    // atributo privado

    let velocidadeAtual = 0 

    // método público

    this.acelerar = function() {

        if (velocidadeAtual + delta <= velocidadeMaxima) {

            velocidadeAtual += delta

            } else { velocidadeAtual = velocidadeMaxima

        }
            

    } 
    
    // método público
    
         this.getVelocidadeAtual = function() {
            
        return velocidadeAtual
  
    }

}

const uno = new Carro()

uno.acelerar()
uno.acelerar()

const ferrari = new Carro(350, 80)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(uno.getVelocidadeAtual())
console.log(ferrari.getVelocidadeAtual())



function mudarCor(cor) {
    this.color = cor || 'cinza';
}

function veiculo(modelo, color) {

    var color = color || 'black';

    this.modelo = modelo || 'ford';
 
    this.mudacor = mudarCor

    this.pegaCor = function () {
       return 'A nova cor do veículo é ' + this.color

    }

}


console.log(veiculo)

var volkswagen = new veiculo('golf', 'red')

console.log(volkswagen)

volkswagen.mudacor()

console.log(volkswagen)

console.log(volkswagen.pegaCor())