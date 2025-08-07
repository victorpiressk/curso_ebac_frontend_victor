// Escopo global
let nome = 'Victor'

function saudacao() {
    console.log(`Olá, ${nome}!`)
}

saudacao()

// Escopo local
function apresentacao() {
    let sobrenome = 'Pires'
    console.log(`Olá, ${sobrenome}!`)
}

apresentacao()

// Closures
function declaraValores() {
    let valor1 = 10
    let valor2 = 25

    function somaValores() {
        let soma = valor1 + valor2
        console.log(`A soma dos valores é: ${soma}`)
    }

    function subtraiValores() {
        let subtrai = valor1 - valor2
        console.log(`A subtração dos valores é: ${subtrai}`)
    }

    return {
        somaValores: somaValores,
        subtraiValores: subtraiValores
    }
}

const valorDeclarado = declaraValores()

valorDeclarado.somaValores()
valorDeclarado.subtraiValores()