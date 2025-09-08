## Manipulação do DOM com TypeScript
- No TypeScript, a manipulação do DOM é bem parecida com o JavaScript, mas com a vantagem da tipagem estática.

### Seleção de elementos
```
// Selecionando um elemento pelo id
const titulo = document.getElementById("titulo");

// TypeScript infere o tipo como HTMLElement | null
titulo?.innerText = "Novo título com TypeScript";
```
1. ``document.getElementById("titulo")`` retorna ``HTMLElement | null``.
    - ``HTMLElement`` → caso o elemento exista.
    - ``null`` → caso não exista.
2. O ``?.`` (optional chaining) garante que a atribuição de ``innerText`` só será feita se ``titulo`` não for null.
3. Se o elemento não existir, **nenhum erro acontece**. O código simplesmente ignora a atribuição.

### Trabalhando com tipos mais específicos
- Se você sabe exatamente o tipo do elemento, pode usar type casting:
```
const input = document.getElementById("meuInput") as HTMLInputElement;
input.value = "Texto preenchido via TypeScript";
```
- Diferente de ``HTMLElement``, que é genérico, ``HTMLInputElement`` tem propriedades específicas como ``value``.

### Adicionando eventos
```
const botao = document.getElementById("btn-enviar") as HTMLButtonElement;

botao.addEventListener("click", (event: MouseEvent) => {
  console.log("Botão clicado!", event);
});
```
- Aqui o TypeScript reconhece que o evento é um ``MouseEvent``, garantindo autocompletar e verificação de tipos.
- Clicando em F12 é possível ver uma lista de comandos atribuidos ao ``MouseEvent``, como uma documentação que pode ser utilizada para a construção do código.

### Criando e adicionando elementos no DOM
```
const lista = document.getElementById("lista") as HTMLUListElement;

const novoItem = document.createElement("li");
novoItem.innerText = "Novo item";

lista.appendChild(novoItem);
```
- O compilador garante que ``lista`` é uma lista (``HTMLUListElement``), então métodos como ``appendChild`` funcionam com segurança.

## Resumo:
- Com TypeScript, a manipulação do DOM é idêntica ao JavaScript, mas muito mais segura, pois o compilador exige que você trate casos de ``null``, use tipos corretos para elementos (``HTMLInputElement``, ``HTMLButtonElement``, etc.) e fornece intellisense para evitar erros.