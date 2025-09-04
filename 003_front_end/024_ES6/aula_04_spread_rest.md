## Resumo Spread e Rest
### Spread (...)
- Operador usado para espalhar os itens de um array ou as propriedades de um objeto em outro contexto (como em funções, cópias ou junções).
- Quando usar:
    - Para passar elementos de um array como argumentos de função.
    - Para copiar arrays ou objetos sem modificar o original.
    - Para juntar arrays ou objetos.

### Rest (...)
- Operador usado para agrupar múltiplos valores em um único array ou objeto.
- Quando usar:
    - Para capturar argumentos extras em funções.
    - Para coletar o “resto” das propriedades ou valores de um objeto/array.

## Spread — o que faz e exemplos
1) Em chamadas de função — expande um array em argumentos:
```
var nums = [1, 2, 3];
Math.max(...nums); // equivalente a Math.max(1,2,3)
```
2) Em literais de array — concatenação / clonagem:
```
var a = [1,2];
var b = [3,4];
var c = [...a, ...b]; // [1,2,3,4]
var clone = [...a];   // cópia rasa de 'a'
```
3) Em objetos (ES2018+) — mescla / clonagem de propriedades:
```
var o1 = {x:1, y:2};
var o2 = {y:99, z:3};
var merged = {...o1, ...o2}; // {x:1, y:99, z:3}  (o2 sobrescreve y)
var cloneObj = {...o1};
```
4) Em strings (é iterável):
```
var chars = [..."oi"]; // ['o','i']
```

### Observações importantes sobre spread
- Spread faz shallow copy (cópia rasa). Objetos aninhados continuam referenciando as mesmas instâncias.
- Você só pode espalhar iteráveis (arrays, strings, Maps iteráveis); para objetos use spread de objeto ({...obj}).
- Ordem importa: {...a, ...b} → propriedades de b sobrescrevem a.

## Rest — o que faz e exemplos
1) Rest em parâmetros de função — coleta todos os argumentos restantes em um array:
```
function soma() {
  // sem rest, usar arguments (array-like)
}
function somaComRest(...nums) { // nums é um array
  return nums.reduce(function(acc, n){ return acc + n; }, 0);
}
somaComRest(1,2,3); // 6
```
2) Rest em destructuring de arrays — pega o “resto”:
```
var arr = [1,2,3,4];
var primeiro = arr[0];
var resto = arr.slice(1);

// com rest
var [head, ...tail] = arr;
console.log(head); // 1
console.log(tail); // [2,3,4]
```
3) Rest em destructuring de objetos — pega as propriedades restantes numa nova objeto:
```
var obj = {a:1, b:2, c:3};
var {a, ...resto} = obj;
console.log(a);     // 1
console.log(resto); // { b:2, c:3 }
```

### Regras do rest
- Em parâmetros, rest deve ser o último: function f(a, ...rest) {} — não pode ter nada depois de ...rest.
- Em destructuring, rest também vem por último: [x, ...rest] = arr ou {a, ...rest} = obj.
- Rest em função retorna um array; rest em objeto retorna um objeto com as propriedades restantes.