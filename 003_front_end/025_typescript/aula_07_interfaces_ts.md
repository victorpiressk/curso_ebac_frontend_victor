## Interfaces no TypeScript
- Uma interface em TypeScript é como um contrato que define a estrutura que um objeto, função ou classe deve seguir.
- Ela não gera código no JavaScript final, é apenas usada pelo compilador para garantir tipagem e consistência.

### 1. Interface básica para objetos
```
interface IPessoa {
  nome: string;
  idade: number;
  ativo: boolean;
}

const usuario: IPessoa = {
  nome: "Victor",
  idade: 30,
  ativo: true
};

```
- Aqui, o objeto usuario deve obrigatoriamente ter nome, idade e ativo.

### 2. Interfaces para funções
```
interface ICalculadora {
  (a: number, b: number): number;
}

const soma: ICalculadora = (x, y) => x + y;
console.log(soma(5, 3)); // 8
```
- Aqui a interface define o formato da função.

### 3. Extensão de interfaces
- Interfaces podem herdar de outras interfaces.
```
interface IAnimal {
  nome: string;
}

interface ICachorro extends IAnimal {
  raca: string;
}

const dog: ICachorro = {
  nome: "Rex",
  raca: "Labrador"
};
```

### 4. Interfaces em classes
- Uma classe pode implementar (``implements``) uma interface, garantindo que siga o contrato.
- Na programação orientada a objetos só é permitido a herança de uma classe, ou seja, não podemos herdar de mais de uma classe, porém com as interfaces podemos implementar várias.
```
interface IVeiculo {
  acelerar(): void;
  frear(): void;
}

class ICarro implements IVeiculo {
  acelerar(): void {
    console.log("Carro acelerando...");
  }
  frear(): void {
    console.log("Carro freando...");
  }
}
```