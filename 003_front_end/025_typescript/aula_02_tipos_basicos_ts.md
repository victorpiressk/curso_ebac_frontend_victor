## Tipos básicos do typescript
### 1. number
- Representa números (inteiros ou decimais).
```
let idade: number = 25;
let preco: number = 19.99;
```

### 2. string
- Textos, delimitados por aspas simples, duplas ou crase.
```
let nome: string = "Victor";
let sobrenome: string = 'Pires';
let mensagem: string = `Olá, ${nome} ${sobrenome}!`;
```

### 3. boolean
- Valores lógicos: true ou false.
```
let ativo: boolean = true;
let concluido: boolean = false;
```

### 4. array
- Coleções de valores do mesmo tipo.
- Existem duas formas de criar tipos de array:
```
let numeros: number[] = [1, 2, 3, 4, 5];
let frutas: Array<string> = ["maçã", "banana", "uva"];
```

### 5. tuple
- Array com número fixo de elementos e tipos definidos.
```
let pessoa: [string, number];
pessoa = ["Victor", 30]; // [nome, idade]
```

### 6. enum
- Conjunto de valores nomeados.
```
enum Cor { Vermelho, Verde, Azul }
let minhaCor: Cor = Cor.Verde; // 1
```

### 7. any
- Aceita qualquer tipo (evite usar, a não ser em último caso).
```
let valor: any = 5;
valor = "Texto";
valor = true;
```

### 8. unknown
- Parecido com any, mas mais seguro: exige checagem antes do uso.
```
let dado: unknown = "Olá";
if (typeof dado === "string") {
  console.log(dado.toUpperCase());
}
```

### 9. void
- Usado em funções que não retornam nada.
```
function logMensagem(msg: string): void {
  console.log(msg);
}
```

### 10. null e undefined
- Representam ausência de valor.
```
let nulo: null = null;
let indefinido: undefined = undefined;
```