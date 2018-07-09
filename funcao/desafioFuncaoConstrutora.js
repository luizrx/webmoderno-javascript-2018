function Falar(nome) {

    this.nome = nome

    this.dizer = function() {
        console.log('Meu nome é ' + this.nome)
    }

}

const roberto = new Falar('Roberto')

roberto.dizer()



function Speaking(name) {

    name = name

    //this.name = name

    this.talk = function() {
        console.log('Meu nome é ' + name/*this.name*/)
    }

}

const p1 = new Speaking('Jorge')

p1.talk()

console.log(p1.name)  // Como não estamos usando o 'this', o valor não está disponível,
                      // retornando 'undefined'