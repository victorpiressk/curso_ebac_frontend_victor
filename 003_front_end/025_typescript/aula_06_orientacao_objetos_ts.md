## Orientação a Objetos (OO) em TypeScript
- O TypeScript dá suporte total à programação orientada a objetos, com classes, herança, encapsulamento e polimorfismo que deixam o código mais estruturado e próximo de linguagens como Java ou C#.

### 1. Classes
- Com o TypeScript as propriedades precisam ter seu tipo declarado antes do contrutor, depois adiciondas como argurmento.
- Os metodos também precisa ter o seu tipo declarado para não ter erro.
```
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
  }
}

const p1 = new Pessoa("Victor", 30);
console.log(p1.apresentar());
```

### 2. Encapsulamento (Modificadores de Acesso)
- Definem a visibilidade de propriedades/métodos:
    - ``public`` → acessível em qualquer lugar (padrão).
    - ``private`` → só acessível dentro da própria classe.
    - ``protected`` → acessível na classe e em subclasses.
```
class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  verSaldo(): number {
    return this.saldo;
  }
}

const conta = new ContaBancaria(100);
conta.depositar(50);
console.log(conta.verSaldo()); // 150
// console.log(conta.saldo); erro, é privado
```
### 3. Herança
- Permite que uma classe filha herde propriedades e métodos de uma classe pai.
```
class Animal {
  constructor(public nome: string) {}

  emitirSom(): void {
    console.log("Som genérico...");
  }
}

class Cachorro extends Animal {
  emitirSom(): void {
    console.log("Au au!");
  }
}

const dog = new Cachorro("Rex");
dog.emitirSom(); // "Au au!"
```

### 4. Polimorfismo
- Uma subclasse pode redefinir (override) ou adaptar métodos da classe pai.
- Exemplo acima do ``emitirSom()`` já mostra polimorfismo.