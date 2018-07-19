const funcs = []

for(let i=0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs[0]()
// funcs[10]() - O JS retornará erro, já que 'i' não pode ser igual ou maior que 10
// funcs[11]() - O JS retornará erro, já que não existe o índice 11