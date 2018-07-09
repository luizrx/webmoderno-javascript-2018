const [a] = [10]
console.log(a)

const [n1, , n3, n4, n5, n6 = true] = [10, 20, 30, 40]
console.log(n1, n3, n4, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

const[roberto, carol, eduardo] = [10, 20, 'xispita']
console.log(roberto, carol, eduardo)




    const animais = ['dog', 'cat', 'pig', 'cow', 'monkey', 'whale', 'shark']

    console.log(animais)

    var [cachorro, gato, , vaca, , baleia, ] = animais

    console.log('cachorro/gato/vaca/valeia', cachorro, gato, baleia)

    console.log(animais)