## Acessar atributos
- A primeira forma é através da notação ponto: ``console.log(pessoa.nome)``
- A segunda forma é através dos colchetes: ``console.log(pessoa['nome'])``

## Criar atributos em um objeto ja definido
### Objeto definido
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
```
- Adicionar atributo no objeto: ``pessoa.sobrenome = "Pires"`` ou ``pessoa['sobrenome'] = "Pires"``
## Verificar atributos
- A primeira forma é adicionando o atributo no argumento do if
- Desvantagem, em caso do atributo estiver com valor nulo ou indefinido, o if não será executado
```
if (pessoa['sobrenome']) { // notação ponto também pode ser utilizado
    console.log("A pessoa tem sobrenome")
}
```
- A segunda forma é adicionando a palavra reservada "in" no argumento do if
- Assim teremos o retorno do is mesmo que o atributo esteja nulo ou indefinido
```
if ('sobrenome' in pessoa) {
    console.log("A pessoa tem sobrenome")
}
```
## Como congelar atributos de um objeto
- Mesmo que uma constante seja imutavel os atributos de um objeto podem ser alterados
- Para que possamos "congelar" os atributos de um objeto, utilizamos a função freeze()
```
Object.freeze(pessoa)
```
## Como transformar os atributos de um objeto em array
- Os atributos de um objetos também são conhecidos como keys (chaves)
- Assim, conseguimos utilizar a função keys() para transformar a visibilidade dos atributos em um array
```
console.log(Object.keys(pessoa)) // retorno ['nome', 'idade', 'eMaiorDeIdade', 'conhecimentos', 'sobrenome']
```
- Essa função também é util para identificar a quantidade de propriedades que existem no objeto
```
console.log(Object.keys(pessoa).lenght) // retorno 5
```
- E também podemos verificar os valores do objeto utilizando a função values()
```
console.log(Object.values(pessoa)) // retorno ['victor', 30, true, ["html", "css", "javascript"], Pires]
```