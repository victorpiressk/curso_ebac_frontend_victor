## Formas de criar objetos com JS
### Primeira forma de criar objetos:
- A Abertura das chaves da inicio a construção dos objetos
- O objeto pode conter varios atributos/propriedades
- A criação de uma função em uma propriedade é chamada de método
- Chamamos de objeto literal
```
const objeto = {
    propriedade: 'valor',
    propriedadeDois: function() {
        return valorDois
    }
}
```
- **OBS:** Em projetos maiores com varios objetos que compartilham as mesmas propriedades, o projeto pode ficar insustentavel pela quantidade de repetições.

### Segunda forma de criar objetos:
- A criação das funções construtoras da inicio a construção dos objetos
- Por convenção a primeira letra da função deverá ser mauscula
- Os atributos devem ser adicionados como argumento da função
- Os métodos não precisam ser adicionados como argumento e serão compatilhados entre todas as outras funções herdeiras
- Para referenciar a função, deve ser utilizado o this
- E para criar um atributo, utilizamos o "this." nomeamos o atributo e depois adicionamos um valor a ele que será o argumento da função
```
function Objeto(atributo1, atributo2, atributo3) {
    this.atributo1 = atributo1;
    this.atributo2 = atributo2;
    this.atributo3 = atributo3;
    this.metodo = function() {
        return valorMetodo
    }
}
```
- Para chamar essa função construtora devemos colocar a palavre new antes da função e colocamos os valores dos argumentos
```
const novoObjeto = new Objeto("valor1", "valor2", valor3)
```
### Exemplo:
```
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.acelerar = function() {
        console.log("Vrunn")
    }
}

const carroDoJoao = new Carro("Fiesta", "Ford", 2020, 2019)
const carroDaMaria = new Carro("ka", "Ford", 2021, 2020)

console.log(carroDoJoao)
console.log(carroDaMaria)
```