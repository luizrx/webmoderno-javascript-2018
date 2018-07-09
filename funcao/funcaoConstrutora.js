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

