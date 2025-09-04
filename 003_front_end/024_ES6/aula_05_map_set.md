## O que é o Map
#### ``Map`` é uma estrutura chave→valor (dicionário) introduzida no ES6 onde:
- As chaves podem ser de qualquer tipo (strings, números, objetos, funções, símbolos);
- A ordem das chaves é preservada (ordem de inserção);
- Oferece operações nativas (set, get, has, delete, size) e iteração fácil.

### Quando usar
- Quando precisar de chaves que não sejam apenas strings (ex.: usar objetos como chaves).
- Quando quiser garantir inserção/iterabilidade e performance estável para leitura/escrita frequentes.
- Para caches, contadores, agrupamentos e associações entre objetos.

### Principais métodos / propriedades
- ``new Map(iterable?)`` — cria um Map. Pode receber um array de pares [[k1, v1], [k2, v2]].
- ``map.set(key, value)`` — adiciona ou atualiza.
- ``map.get(key)`` — retorna o valor ou undefined se não existir.
- ``map.has(key)`` — booleano.
- ``map.delete(key)`` — remove a entrada; retorna true/false.
- ``map.clear()`` — remove tudo.
- ``map.size`` — número de entradas.
- Iteradores: ``map.keys()``, ``map.values()``, ``map.entries()``; ``map.forEach((value, key) => {})``.

### Exemplo básico
```
const mapa = new Map();
const objKey = { id: 1 };

mapa.set('nome', 'Ana');
mapa.set(objKey, { idade: 25 });

console.log(mapa.get('nome'));        // "Ana"
console.log(mapa.get(objKey));        // { idade: 25 }
console.log(mapa.has(objKey));        // true
console.log(mapa.size);               // 2

for (const [chave, valor] of mapa.entries()) {
  console.log(chave, valor);
}
```

### Conversões úteis
- Map → Array de pares: ``Array.from(mapa)`` ou ``[...mapa]``
- Array de pares → Map: ``new Map(pares)``
- Map → Objeto (somente se as chaves forem strings/símbolos): ``Object.fromEntries(mapa)``
- Objeto → Map: ``new Map(Object.entries(obj))``

### Observações e armadilhas
- Chaves por referência: dois objetos com mesmo conteúdo não são a mesma chave.
```
const a = {x:1};
const b = {x:1};
mapa.set(a, 1);
console.log(mapa.has(b)); // false, a !== b
```
- ``Map`` permite ``NaN`` como chave e trata ``NaN`` como igual a ``NaN`` (SameValueZero semantics).
- ``Map`` é geralmente mais apropriado que ``Object`` quando chaves não são strings ou quando precisa da API de Map.

### Uso prático: contador de ocorrências
```
function contarPalavras(arr) {
  const m = new Map();
  arr.forEach(function(p) {
    const c = m.get(p) || 0;
    m.set(p, c + 1);
  });
  return m;
}
console.log(contarPalavras(['a','b','a'])); // Map { 'a' => 2, 'b' => 1 }
```

## O que é o Set
- ``Set`` é uma coleção de valores únicos. Não permite duplicatas — qualquer valor aparece no máximo uma vez. Também preserva ordem de inserção.

### Quando usar
- Remover duplicatas de um array.
- Verificação rápida de membro (has).
- Conjuntos matemáticos (união, interseção, diferença).
- Quando precisa de coleção com valores únicos e iteração.

### Principais métodos / propriedades
- ``new Set(iterable?)`` — cria um Set.
- ``set.add(value)`` — adiciona (se já existir, não altera).
- ``set.has(value)`` — booleano.
- ``set.delete(value)`` — remove.
- ``set.clear()`` — limpa o Set.
- ``set.size`` — quantidade de elementos.
- Iteradores: ``set.keys()``, ``set.values()`` (são iguais), ``set.entries()`` ``(cada entrada é [value, value])``, ``set.forEach(value => {})``.

### Exemplo básico
```
const s = new Set();
s.add(1);
s.add(2);
s.add(2); // ignorado
console.log(s.size); // 2
console.log(s.has(1)); // true

for (const v of s) {
  console.log(v);
}
```

### Conversões úteis
- Array → Set (remover duplicatas): ``new Set(arr)``
- Set → Array: ``[...set]`` ou ``Array.from(set)``

#### Exemplo:
```
const arr = [1,2,2,3];
const unico = [...new Set(arr)]; // [1,2,3]
```

### Observações e armadilhas
- Igualdade: ``Set`` usa SameValueZero (similar a ``===`` exceto que ``NaN`` é considerado igual a ``NaN``).
- Para objetos, a unicidade é por referência: dois objetos idênticos são diferentes se não forem a mesma instância.
- ``Set`` não tem método direto para obter item por índice; para isso converta em array.

### Uso prático: interseção
```
function intersecao(a, b) {
  const setB = new Set(b);
  return a.filter(function(x) { return setB.has(x); });
}
```

## WeakMap e WeakSet (breve)
- WeakMap: chaves só podem ser objetos; as referências são fracas — se não existir outra referência, o par pode ser coletado pelo GC; não tem size, não é iterável. Bom para dados privados ligados a objetos (por exemplo metadata).
- WeakSet: coleção de objetos onde as referências são fracas; idem: não iterável e útil para marcar objetos temporariamente.

#### Exemplo de uso do WeakMap para dados privados:
```
const _priv = new WeakMap();
class User {
  constructor(name) {
    _priv.set(this, { name });
  }
  getName() {
    return _priv.get(this).name;
  }
}
```

## Diferenças resumidas: Map vs Object, Set vs Array
### Map vs Object
- Map aceita qualquer tipo de chave; Object converte chaves para string (ou usa símbolos).
- Map tem ``size``, Object precisa ``Object.keys(obj).length``.
- Map preserva ordem de inserção e tem API dedicada para iteração.
- Object tem prototype → risco de colisões de nomes se não usar ``Object.create(null)``.

### Set vs Array
- Set garante unicidade; Array permite repetição.
- Set não tem índices (mas é iterável), Array tem métodos de busca por índice.
- Operações de verificação de existência são mais rápidas em Set (``has``) do que ``includes`` em array em grandes volumes.

## Performance (observações práticas)
- ``Map``/``Set`` costumam ter performance O(1) para ``get``/``set``/``has`` (amortizado); para casos com muitas operações dinâmicas são geralmente melhores que usar ``{}`` ou arrays para procurar elementos.
- Para pequenas coleções simples, ``Array``/``Object`` podem ser suficientes e mais simples; mas para grandes conjuntos e operações frequentes, ``Map``/``Set`` são preferíveis.

## Boas práticas
- Use ``Map`` quando: chaves não são strings/símbolos, quando precisa da ordem de inserção ou de operações frequentes de leitura/escrita.
- Use ``Set`` quando: quer coleções de valores únicos e verificar existência rapidamente.
- Use ``WeakMap``/``WeakSet`` para associar dados que devem ser liberados automaticamente pelo GC quando objetos deixam de ser referenciados.
- Ao transformar ``Map`` em JSON, converta: ``Object.fromEntries(map)`` (apenas se chaves forem strings) ou ``Array.from(map)`` e serializar.