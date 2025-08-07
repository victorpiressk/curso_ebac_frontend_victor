// realizar teste de condicional no console do navegador

// Condicional padrão
// if = se
// else = senão
// else if = senão se
let idade1 = prompt('Bem vindo ao sistema eleitoral! Digite sua idade para seguir com o cadastramento')

if (idade1 >= 16) {
    alert('Certo! Vamos seguir com o cadastramento.')
} else {
    alert('Para prosseguir, o eleitor deve ter no mínimo 16 anos.')
}

// Condicional com operador ternário
// ? = if = se
// : = else = senão
let idade2 = prompt('Bem vindo ao sistema eleitoral! Digite sua idade para seguir com o cadastramento')

const resultado = idade2 >= 16 ? 'Certo! Vamos seguir com o cadastramento.' : 'Para prosseguir, o eleitor deve ter no mínimo 16 anos.'

alert(resultado)