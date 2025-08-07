/*
Passo a passo criar uma função:
- Declarar uma função: comando -> function
- Nomear a função: nomeDaFuncao()
- Definir parametros da função: nomeDaFuncao(parametro)
- Definir funcionalidade da função: nomeDaFuncao(parametro) {
    return valor + parametro
}
- Atribuir valor ao parametro: nomeDaFuncao(10)
*/

// Forma padrão de utilização de funções
function descobrirIdade(anoNascimento) {
    return 2025 - anoNascimento
}

descobrirIdade(1995)

function somarNumeros(numeroA, numeroB, numeroC) {
    return numeroA + numeroB + numeroC
}

somarNumeros(10,20,30)

// Forma de utilização de funções com apresentação
function somarNumeros2(numeroD, numeroE, numeroF) {
    let resultado = numeroD + numeroE + numeroF
    return console.log('A soma é: ' + resultado)
}

somarNumeros2(40,50,60)