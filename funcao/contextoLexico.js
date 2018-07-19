
const valor = 'Global'

function minhaFuncao() {  // Se chamarmos essa função, ela irá exibir 'Global', já que não existe
    console.log(valor)    // nenhuma outra variável 'valor' num contexto mais próximo da função.
}

function exec() {
    const valor = 'Local' // Mesmo com a variável declarada dentro da função 'exec', o valor
    minhaFuncao()         // demonstrado ao chamara a função 'minhaFuncao' será 'Global',
}                         // já que ele faz parte do contexto léxico no qual aquela função
                          // foi declarada.
exec()