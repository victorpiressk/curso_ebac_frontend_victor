## O que é Polimorfismo?
- Polimorfismo significa "muitas formas".
- Na prática, é a capacidade de um método ter comportamentos diferentes dependendo do objeto que o implementa.
- Ou seja: você pode chamar o mesmo método em várias classes diferentes, e cada uma delas responde à sua maneira.

## Exemplo em JavaScript
### 1. Classe base (superclasse)
```
class Animal {
  emitirSom() {
    console.log("Som genérico de animal");
  }
}
```

### 2. Classes derivadas (subclasses)
```
class Cachorro extends Animal {
  emitirSom() {
    console.log("Au Au");
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log("Miau");
  }
}

class Vaca extends Animal {
  emitirSom() {
    console.log("Muuu");
  }
}
```

### 3. Polimorfismo em ação
```
const animais = [new Cachorro(), new Gato(), new Vaca()];

animais.forEach(animal => animal.emitirSom());
```

## Saída:
```
Au Au
Miau
Muuu
```

## Resumindo
- Polimorfismo = um mesmo método pode ter comportamentos diferentes.
- Facilita reuso de código e torna o sistema mais flexível e extensível.
- Em JS, conseguimos isso usando herança e sobrescrita de métodos.