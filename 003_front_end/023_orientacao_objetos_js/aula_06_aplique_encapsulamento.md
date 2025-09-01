## Encapsulamento
- Encapsulamento em Orientação a Objetos com JavaScript significa proteger os dados internos de um objeto para que só possam ser acessados ou modificados de forma controlada. Isso evita que valores sejam alterados de maneira incorreta e mantém a consistência da aplicação.

## Maneiras de aplicar encapsulamento em JavaScript:
### 1. Convenção com underscore (_)
- Não é obrigatório, mas usado para indicar que a propriedade é “privada”.
```
class ContaBancaria {
  constructor(saldoInicial) {
    this._saldo = saldoInicial; // "privado" por convenção
  }

  depositar(valor) {
    this._saldo += valor;
  }

  sacar(valor) {
    if (valor <= this._saldo) {
      this._saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  getSaldo() {
    return this._saldo;
  }
}

const conta = new ContaBancaria(100);
conta.depositar(50);
conta.sacar(30);
console.log(conta.getSaldo()); // 120
```

### 2. Campos privados reais (#) — ES2022+
- Com o #, a propriedade é realmente privada e só pode ser acessada dentro da classe.
```
class ContaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    this.#saldo += valor;
  }

  sacar(valor) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const conta = new ContaBancaria(200);
conta.depositar(100);
conta.sacar(50);
console.log(conta.getSaldo()); // 250
// console.log(conta.#saldo); ❌ Erro: não é acessível fora da classe
```

## Resumo:
- Encapsulamento = proteger propriedades internas.
- Evita acesso direto e garante regras de uso.
- Pode ser feito com métodos getters/setters ou com o modificador #.