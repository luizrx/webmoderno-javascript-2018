function getInteiroAleatorioEntre(min, max) {

    //if(min > max) [max, min] = [min, max]

    const valor = Math.random() * (max - min) + (min);

    return Math.floor(valor);

}

var sorteio = 101;

do{ 

    sorteio = getInteiroAleatorioEntre(100, 115);

    console.log("O número sorteado foi " + sorteio);

} while(sorteio != 100);


notas = [2,3,5,6,1,2,3.5,4.2,6.7,.7,8.1]

avaliacoes = {
    roberto = 4,
    eduardo = 6,
    thais = 7,
    carol = 8.1
}
console.log(notas)

(let i = 0; i <= notas.length; i++) {

    console.log(`A nota obtida pelo aluno foi ${notas[i]}!`)

}

for(var i in avaliacoes) {
    console.log(i)
}