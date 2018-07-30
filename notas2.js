//promise
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000 )
    })
}
    


falarDepoisDe(5, 'vai se fuder')
.then(frase => console.log(frase))