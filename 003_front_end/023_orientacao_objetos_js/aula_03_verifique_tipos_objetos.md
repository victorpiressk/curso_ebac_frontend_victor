## Verificação padrão
- Para verificação padrão utilizamos o "typeof"
```
const nome = "victor"
const idade = 30
const eMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa =  {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome) // retorno string
console.log(typeof idade) // retorno number
console.log(typeof eMaiorDeIdade) // retorno boolean
console.log(typeof conhecimentos) // retorno object
console.log(typeof pessoa) // retorno object
```
- Mesmo conhecimento sendo um array e pessoa sendo um objeto, os dois são reconhecidos como objetos.

## Verificação de objetos
- Nesse caso podemos utilizar um segundo tipo de verificação "instanceof" para identificar qual o tipo de instancia.
- O retorno será um boleano, pois verificaremos se é uma instancia de um determinado dado.
```
console.log(conhecimentos instanceof array) // retorno true
console.log(conhecimentos instanceof Carro) // retorno false
console.log(carroDaMaria instanceof Carro) // retorno true
console.log(carroDaMaria instanceof array) // retorno false
```
- Assim conseguimos determinar qual o tipo de objeto estamos verificando.