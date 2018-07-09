// valor = Math.random()

// console.log(valor)

// valor = function(max, min) {
//     return Math.random() *(max - min) + (min)
// }

// console.log(valor(20,19))

    var random = function({min = 990, max = 1000}) {
        const valor = Math.random() * (max - min) + min;
        return Math.floor(valor);
    }

    const obj = {min: 100, max: 200}
    console.log('primeira notação:' , random(obj));

    console.log('segunda notação:', random({}))

    
    var rand = function([min = 1000 , max = 5000]) {
        const numero = Math.random() * (max - min) + min;
        return Math.floor(numero);
    }

    const num = [800, 900]

    console.log('primeira tentativa:', rand(num))

    console.log('segunda tentativa', rand([]))

    var fun = function([min = 1000, max = 100]) {
        if(min > max) [max, min] = [min, max] 
        const valor2 = Math.random() * (max - min) + min
        return Math.floor(valor2)
    }

    console.log(fun([]))