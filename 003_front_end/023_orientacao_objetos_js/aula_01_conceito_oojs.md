## Orientação a Objetos com JavaScript (OOP)
- Orientação a Objetos é um paradigma de programação que organiza o código em objetos — estruturas que agrupam dados (propriedades) e comportamentos (métodos).
- No JavaScript, OOP é bastante usada, e podemos criar objetos de várias formas:

## Conceitos principais:
- Classe → modelo (ou "molde") para criar objetos.
- Herança → objetos/ classes podem herdar características de outros.
- Objeto → instância da classe (o que realmente usamos).
- Propriedade → uma característica (variável dentro do objeto).
- Método → uma função dentro do objeto (comportamento).
- Encapsulamento → controlar o acesso aos dados de um objeto.
- Polimorfismo → objetos diferentes podem ter métodos com o mesmo nome, mas funcionam de formas diferentes.

## Exemplo Abstração (Computador):
### Classe → Computador
- Propriedade:
    - Mémoria RAM
    - Armazenamento
    - CPU
    - GPU
    - Sistema Operacional
- Método:
    - Ligar
    - Desligar
    - Reiniciar

### Herança → Desktop / Notebook
- Propriedade Desktop:
    - Computador de mesa

- Propriedade notebook:
    - Computador portatil

### Objeto (instância) → Notebook de Victor
- Propriedade:
    - Periféricos (teclado e mouse)
    - Monitor (Segunda tela)
    - Camera
    - Caixa de som
- Método:
    - Estudar programação
    - Jogar
    - Assistir vídeos

## Exemplo Abstração (Pokémon):
### Classe → Pokémon
- Propriedade:
    - animal
- Método:
    - Atacar
    - Defender
### Herança → Pikachu
- Propriedade:
    - animal do tipo eletrico
    - forte contra: Tipo aquático
    - fraco contra: Tipo rochoso
### Objeto (instância) → Pikachu do ash
- Propriedade:
    - Não fica na pokebola
    - hp: 100
    - ataque: 20
    - defesa: 10
- Método:
    - tipo ataque: Shock do trovao

## Exemplo Abstração (Veículo):
### Classe → Veículo
- Propriedade:
    - Motor
    - Rodas
    - Freios
    - Tanque de gasolina
    - Escapamento
- Método:
    - Ligar
    - Desligar
    - Acelerar
    - Freiar
### Herança
#### Carro
- Propriedade:
    - 4 Rodas
    - Portas
    - 4 acentos
    - potência em CV
    #### Segunda herança (HB20)
    - Propriedade:
        - potência: 120cv
#### Moto
- Propriedade:
    - 2 Rodas
    - 1 acento
    - potência em cilindradas
    #### Segunda herança (Fazer)
    - Propriedade:
        - potência: 500 cilindradas
### Objeto (instância)
#### HB20 do joão
- Propriedade:
    - Som personalizado
    - Rodas novas
    - 20 mil Km rodados
#### Carro da Maria
- Propriedade:
    - Combustivel a gás
    - 100 mil Km rodados


## Exemplo em JavaScript:
### Criando uma classe
```
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome; // propriedade
    this.idade = idade;
  }

  // método
  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
```

### Criando um objeto (instância)
```
const usuario = new Pessoa("Victor", 30);
usuario.seApresentar(); 
// Saída: Olá, meu nome é Victor e tenho 30 anos.
```


## Em resumo:
- Orientação a Objetos em JavaScript é uma forma de estruturar o código para que fique mais organizado, reutilizável e fácil de manter, usando classes e objetos.