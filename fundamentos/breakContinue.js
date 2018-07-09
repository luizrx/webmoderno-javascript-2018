const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(x in nums) {
    if(x == 5) {
        break
    }
    console.log(`x = ${nums[x]}`)
}

// for(i in nums) {
//     console.log('O número ' + nums[i] + ' é representado pelo índice ' + i + '!')
// }

for(y in nums) {
    if (y == 5) {
        continue
    } console.log(`y = ${nums[y]}`)
}


const obj = {
    modelo: 'golf',
    ano: 1998,
    cor: 'branco'
}

for(atrib in obj) {
    console.log('A característica relacionada ao(a) ' + atrib + ' do objeto relacionado é ' + obj[atrib])
}

var numero = 0;

while(numero < 50) {

    if(numero == 35) {

        continue;

    }

    console.log(numero);

    numero ++;

} console.log('fim da execução');


