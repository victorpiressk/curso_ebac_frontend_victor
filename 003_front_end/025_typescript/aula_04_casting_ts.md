## O que Casting?
- Casting (ou type assertion) em TypeScript é quando você diz explicitamente para o compilador qual é o tipo de um valor.
- Isso não muda o valor em si, mas ajuda o TypeScript a entender como você quer que ele trate aquele dado.

## Formas de Fazer Casting
### Usando ``as``:
```
let valor: unknown = "Olá mundo";
let tamanho: number = (valor as string).length;

console.log(tamanho); // 10
```
- O as string informa ao compilador que valor deve ser tratado como string.

### Usando ``<>`` (sintaxe alternativa):
```
let valor: unknown = "TypeScript";
let tamanho: number = (<string>valor).length;

console.log(tamanho); // 10
```
- Funciona igual ao ``as``, mas essa forma não é recomendada no React/JSX porque ``<string>`` pode ser confundido com tags HTML.

## Situações Comuns de Casting
### Casting com DOM
```
const input = document.querySelector("input") as HTMLInputElement;
input.value = "Digite aqui";
```
- O querySelector pode retornar vários tipos de elementos ou null.
- Com o casting, você informa ao TS que é um HTMLInputElement.

### Forçando tipo mais específico
```
type Usuario = { nome: string; idade: number };
let pessoa = {} as Usuario;

pessoa.nome = "Victor";
pessoa.idade = 30;
```
- Aqui, o objeto vazio ``{}`` foi forçado para o tipo ``Usuario``.

### Casting duplo (``unknown`` → tipo desejado)
```
let valor: string = "123";
let numero: number = (valor as unknown) as number; 
```
- Isso é usado em casos extremos, mas não é recomendado porque pode mascarar erros.

## Diferença entre Casting e Conversão
- **Casting (Type Assertion)** → só diz ao TypeScript como tratar o valor, mas não altera o valor real.
- **Conversão** → realmente transforma o dado. Exemplo:
```
let valor = "123";
let numero = Number(valor); // conversão de string para número
```

## Resumo rápido:
- Usamos ``as`` (mais comum) ou ``<>`` para forçar um tipo.
- Útil ao lidar com DOM, objetos genéricos ou valores ``any``/``unknown``.
- Casting não muda o dado, só como o compilador entende ele.