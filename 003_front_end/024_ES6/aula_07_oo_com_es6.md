## Orientação a Objetos com ES6
- Orientação a Objetos é um modo de programar que organiza o código em objetos com atributos e métodos. No ES6, o JavaScript passou a usar classes, deixando o código mais organizado e parecido com outras linguagens como Java e C#.

## Principais conceitos de OO no ES6

### 1. Classes (``class``)
- São “modelos” para criar objetos.

### 2. Construtor (``constructor``)
- É um método especial chamado automaticamente quando um objeto é criado com new.
- Ele inicializa os atributos.

### 3. Propriedades e Métodos
- **Propriedades** → variáveis ligadas ao objeto (this.nome).
- **Métodos** → funções ligadas ao objeto (seApresentar()).

```
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  seApresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa("Victor", 30);
pessoa1.seApresentar(); 
```
- Aqui ``Pessoa`` é a classe, ``pessoa1`` é um objeto (instância).

### 4. Herança (``extends``)
- Permite criar uma nova classe que aproveita características de outra.
```
class Funcionario extends Pessoa {
  constructor(nome, idade, cargo) {
    super(nome, idade); // chama o constructor da classe Pai
    this.cargo = cargo;
  }

  trabalhar() {
    console.log(`${this.nome} está trabalhando como ${this.cargo}.`);
  }
}

const funcionario1 = new Funcionario("Ana", 25, "Desenvolvedora");
funcionario1.seApresentar();
funcionario1.trabalhar();
```

### 5. Encapsulamento (privacidade de dados)
- No ES6 moderno, podemos usar # para propriedades privadas:
```
class ContaBancaria {
  #saldo = 0; // atributo privado

  depositar(valor) {
    this.#saldo += valor;
  }

  verSaldo() {
    console.log(`Saldo atual: R$ ${this.#saldo}`);
  }
}

const conta = new ContaBancaria();
conta.depositar(100);
conta.verSaldo(); // R$ 100
// conta.#saldo -> ERRO (não pode acessar diretamente)
```

### 6. Polimorfismo
- Capacidade de redefinir métodos em classes filhas.
```
class Animal {
  falar() {
    console.log("O animal faz um som.");
  }
}

class Cachorro extends Animal {
  falar() {
    console.log("O cachorro late: Au au!");
  }
}

const a = new Animal();
const c = new Cachorro();

a.falar(); // "O animal faz um som."
c.falar(); // "O cachorro late: Au au!"
```

## Resumindo
- ``class`` → define uma classe (modelo de objeto).
- ``constructor`` → inicializa o objeto.
- ``extends`` + ``super`` → herança de classes.
- ``#`` → campos privados (encapsulamento).
- Polimorfismo → sobrescrever métodos em classes derivadas.