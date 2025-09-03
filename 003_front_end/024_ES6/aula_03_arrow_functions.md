## O que é uma arrow function?
- É uma forma curta de escrever funções introduzida no ES6.
- Além da sintaxe compacta, a principal diferença é que não cria seu próprio ``this`` (nem ``arguments``, ``super`` ou ``new.target``): ela captura esses valores lexicalmente do escopo onde foi definida.

## Sintaxe básica
```
// 1 parâmetro: parênteses opcionais
const dobro = x => x * 2;

// 0 ou 2+ parâmetros: parênteses obrigatórios
const soma = (a, b) => a + b;
const getHora = () => new Date().toLocaleTimeString();

// Corpo em bloco: precisa de return explícito
const area = (b, h) => {
  const a = b * h;
  return a;
};
```
### Retorno implícito vs. explícito
- **Implícito:** quando o corpo é uma expressão (sem chaves), o valor dessa expressão é retornado.
- **Explícito:** com chaves {}, você precisa usar return.

### Retornar objeto literal (pegadinha!)
- Use parênteses para não confundir com bloco:
```
const criaUser = (nome) => ({ nome, ativo: true });
```

## Parâmetros
- Default parameters:
```
const greet = (nome = "visitante") => `Olá, ${nome}!`;
```
- Rest parameters (substitui arguments):
```
const somaTudo = (...nums) => nums.reduce((acc, n) => acc + n, 0);
```
- Desestruturação:
```
const imprimeUser = ({ nome, idade }) => console.log(nome, idade);
```

## O ``this`` em arrow functions (o ponto mais importante)
- Arrow não tem this próprio: ela usa o this do escopo onde foi criada.
- Isso é ótimo para callbacks e timers, porque evita bind.
```
function Cronometro() {
  this.segundos = 0;
  setInterval(() => {
    // 'this' aqui é o mesmo 'this' de Cronometro
    this.segundos++;
  }, 1000);
}
```
### Quando não usar arrow por causa do ``this``
- Métodos de objeto quando você quer que this seja o próprio objeto:
```
const pessoa = {
  nome: "Ana",
  // ERRADO se você precisa do this do objeto
  fala: () => console.log(this.nome), // this não é 'pessoa'
  // CERTO
  falaCorreto: function () { console.log(this.nome); }
};
```
- Handlers de eventos do DOM quando você precisa que this seja o elemento:
```
// Se você quer que 'this' seja o elemento clicado, use function
btn.addEventListener('click', function () {
  console.log(this); // <button>
});

// Com arrow, use event.currentTarget
btn.addEventListener('click', (e) => {
  console.log(e.currentTarget); // <button>
});
```
## Outras características importantes
- Não pode ser usada como construtora: ``new MinhaArrow()`` lança erro.
- Não tem ``prototype``.
- Não tem ``arguments``: use ``...rest``.
- Não pode ser generator: não usa ``function*`` nem ``yield``.
- Hoisting: arrow functions são expressões; a variável pode ser hoisted (como ``var``/``let``/``const``), mas o valor (a função) não. Use após a definição.
- ``async`` funciona: você pode criar arrow async.
```
const buscaDados = async (url) => {
  const res = await fetch(url);
  return res.json();
};
```

## Bons usos (padrões comuns)
- Callbacks de array:
```
const nums = [1, 2, 3];
const dobrados = nums.map(function (n) { return n * 2; }); // forma clássica
const dobradosArrow = nums.map(n => n * 2);                // conciso
```
- Funções pequenas e puras: ideal para ``map``, ``filter``, ``reduce``, ``sort``, ``find``.
- Preservar ``this`` em classes (métodos como campos de classe, quando precisa de binding):
```
class UI {
  contador = 0;
  // Arrow como campo de classe: this sempre ligado à instância
  handleClick = () => {
    this.contador++;
  };
}
```
- **Observação:** para métodos de protótipo que não precisam de binding, metodo(){} (function normal) é preferível.

## Erros e armadilhas comuns
1. Esquecer parênteses ao retornar objeto:
```
// errado: interpreta como bloco
const f = () => { nome: "Ana" };
// certo:
const f2 = () => ({ nome: "Ana" });
```
2. Usar arrow em métodos que dependem de ``this`` dinâmico (objetos/DOM).
3. Achar que arrow é mais “rápida” por padrão: desempenho depende do motor; escolha pela semântica (lexical ``this``) e legibilidade.

## Resumo de quando usar
- Use para: callbacks, funções pequenas, preservar this de fora, métodos como campos em classes que precisam de binding.
- Evite em: métodos de objeto que dependem de this dinâmico, handlers que precisam de this como elemento, construtores, generators.