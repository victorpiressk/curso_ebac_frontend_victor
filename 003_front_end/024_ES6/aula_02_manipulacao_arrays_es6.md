## Manipulação de Arrays
### 1. Criação e expansão
- ``...`` Spread Operator expande arrays ou combina novos:
```
const frutas = ["maça", "banana"];
const maisFrutas = [...frutas, "uva", "melancia"]

console.log(maisFrutas); // ["maça", "banana", "uva", "melancia"]
```

- ``Array.from()`` Converte valores iteráveis (como strings ou NodeLists) em arrays:
```
const texto = "Victor";

console.log(Array.from(texto)); // ["V","i","c","t","o","r"]
```

- ``Array.of()`` Cria um array a partir de um conjunto de valores:
```
const numeros = Array.of(10, 20, 30);

console.log(numeros); // [10, 20, 30]
```

### 2. Iteração
- ``for...of`` Percorre os elementos do array diretamente:
```
const cores = ["vermelho", "azul", "verde"];

for (const cor of cores) {
  console.log(`Cor: ${cor}`);
}
```

- ``forEach()`` Executa uma função para cada elemento do array:
```
cores.forEach(function(cor, indice) {
  console.log(`#${indice} Cor: ${cor}`);
});
```

### 3. Transformação
- ``map()`` Cria um novo array transformando cada elemento:
```
const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(function(n) {
  return n * 2;
});
console.log(dobrados); // [2, 4, 6, 8]
```

- ``filter()`` Cria um novo array apenas com os elementos que passam em uma condição:
```
const pares = numeros.filter(function(n) {
  return n % 2 === 0;
});
console.log(pares); // [2, 4]
```

- ``reduce()`` Reduz o array a um único valor, acumulando resultados:
```
const soma = numeros.reduce(function(acc, n) {
  return acc + n;
}, 0);
console.log(soma); // 10
```

### 4. Busca e verificação
- ``find()`` Retorna o primeiro elemento que atende a uma condição:
```
const usuarios = [{id: 1}, {id: 2}, {id: 3}];
const user = usuarios.find(function(u) {
  return u.id === 2;
});
console.log(user); // {id: 2}
```

- ``findIndex()`` Retorna o índice do primeiro elemento que atende a uma condição:
```
const usuarios = [{id: 1}, {id: 2}, {id: 3}];
const index = usuarios.findIndex(function(u) {
  return u.id === 2;
});
console.log(index); // 1
```

- ``some()`` Verifica se pelo menos um elemento atende a uma condição:
```
const numeros = [1, 2, 3, 4];
const temMaiorQue3 = numeros.some(function(n) {
  return n > 3;
});
console.log(temMaiorQue3); // true
```

- ``every()`` Verifica se todos os elementos atendem a uma condição:
```
const numeros = [1, 2, 3, 4];
const todosPositivos = numeros.every(function(n) {
  return n > 0;
});
console.log(todosPositivos); // true
```

- ``includes()`` Verifica se o array contém um determinado valor:
```
const frutas = ["maça", "banana"];
console.log(frutas.includes("banana")); // true
```

### 5. Alteração
- ``push()`` / ``pop()`` Adiciona ou remove elementos do final do array:
```
const frutas = ["maça", "banana"];
frutas.push("manga"); // adiciona no final
frutas.pop();      // remove do final
```

- ``shift()`` / ``unshift()`` Adiciona ou remove elementos do início do array:
```
const frutas = ["maça", "banana"];
frutas.unshift("abacaxi"); // adiciona no início
frutas.shift();       // remove do início
```

- ``splice()`` Permite adicionar, remover ou substituir elementos em qualquer posição:
```
const itens = ["a", "b", "c"];
itens.splice(1, 1, "z"); // remove "b" e adiciona "z"
console.log(itens); // ["a", "z", "c"]
```

- ``slice()`` Cria uma cópia parcial do array sem modificar o original:
```
const itens = ["a", "b", "c"];
const copia = itens.slice(0, 2);
console.log(copia); // ["a", "b"]
```

### 6. Ordenação
- ``sort()`` Ordena os elementos de acordo com uma função de comparação:
```
const numeros2 = [10, 1, 5, 20];
numeros2.sort(function(a, b) {
  return a - b;
});
console.log(numeros2); // [1, 5, 10, 20]
```

- ``reverse()`` Inverte a ordem dos elementos do array:
```
numeros2.reverse();
console.log(numeros2);
```