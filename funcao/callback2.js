const notas = [7.7, 8.2, 3.4, 5.2, 4.5, 9.9]

// Sem usar o callback

let notasBaixas1 = []

for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
        }
}

console.log(notasBaixas1)

// Com callback
S
const notasBaixas2 = notas.filter(function(nota){

    return nota < 7

})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

const notasBaixas4 = notas.filter(notasMenorQue7)

console.log(notasBaixas4)

