// Utilização da função typeof para identificar qual o tipo dos dados analizados
let primeiroTipoString = 'banana'
console.log(typeof(primeiroTipoString))

let segundoTipoString = "maçã"
console.log(typeof(primeiroTipoString))

let tipoNumericoInteiro = 6
console.log(typeof(tipoNumericoInteiro))

let tipoNumericoDecimal = 6.6
console.log(typeof(tipoNumericoDecimal))

let tipoNaoDefinido
console.log(typeof(tipoNaoDefinido))

let tipoBoleano = true
console.log(typeof(tipoBoleano))

// Conversão de string numérica para número inteiro
let valorString = '5'
console.log(typeof(valorString))
console.log(typeof(parseInt(valorString)))

// Conversão de string numérica para número decimal
let valorString2 = '6.6'
console.log(typeof(valorString2))
console.log(typeof(parseInt(valorString2)))

// Conversão de string textual para número decimal ou inteiro (NaN - Not a Number)
let valorString3 = 'victor'
console.log(typeof(valorString3))
console.log(parseInt(valorString3))