

function area(altura, largura) {

    const area = largura * altura;

    if(area > 250) {
        
        console.log('Área maior do que o limite permitido: ' + area);

    } else {
        
        console.log(area);
    
    }
}

area(90, 10)
area(90)
area(90, 1)
area(90, 2)