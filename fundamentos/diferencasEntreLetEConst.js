var numero = 1;

{var numero = 2;

    console.log(numero)

}

console.log(numero)

let numero = 1;

{let numero = 2;

console.log(numero)

}

console.log(numero)


{var pergunta = 'será que vai sair o VAR?'}

{let questao = 'será que vai sair o LET?'}

console.log(pergunta)

console.log(questao)

// *** OUTRO EXEMPLO

var a = 1;

{const b = 2

    console.log(b)
}

console.log(a)

// console.log(b)

for(var i = 0; i < 10; i ++){

    console.log(i)

}

console.log('Índice fora do bloco: ', i)

for(let x = 100; x < 110; x ++) {

    console.log(x)

}

console.log(x)


// *******************

var funcs = [];
for(var i = 0; i < 10; i ++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]();
funcs[8]();


let funcao = []

for(let x = 0; x < 20; x ++) {

    funcao.push(function() {
        console.log(x)
    })
}

funcao[2]();
funcao[8]();

const funcao1 = []

for(let x = 0; x < 20; x ++) {

    funcao1.push(function() {
        console.log(x)
    })
}

funcao1[2]();
funcao1[8]();


const produto = {

    nome: 'notebook',
    marca: 'apple'
}

console.log(produto)

produto.marca = 'asus'

console.log(produto)

produto.tela = 15

// produto['tela'] = 15

console.log(produto)

    