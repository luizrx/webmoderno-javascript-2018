
function getRamdonNumber(min, max) {

    var valor = Math.random() * (max - min) + (min);

    return Math.ceil(valor);

}


var peso = 0;

do { peso = getRamdonNumber(10, 40);

console.log(peso);

} while(peso != 35);

console.log(getRamdonNumber(10,100))