## O que é renderização de listas
Renderizar listas significa exibir dinamicamente vários elementos no HTML a partir de um array.

No React, usamos o método .map() para transformar cada item do array em um elemento JSX.

## Exemplo básico
```
import React from "react";

function ListaDeNomes() {
  const nomes = ["Victor", "Maria", "João"];

  return (
    <ul>
      {nomes.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ul>
  );
}

export default ListaDeNomes;
```
### Explicação:
- ``nomes.map(...)`` percorre cada item do array.
- ``O key={index}`` é necessário para o React identificar cada item da lista de forma única (idealmente usar um ID único ao invés do índice).
- ``{}`` no JSX permitem inserir JavaScript dentro do HTML.

## Renderizando objetos
Se a lista for de objetos, você pode acessar suas propriedades no JSX:
```
function ListaDeUsuarios() {
  const usuarios = [
    { id: 1, nome: "Victor", idade: 28 },
    { id: 2, nome: "Maria", idade: 32 },
    { id: 3, nome: "João", idade: 40 }
  ];

  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>
          {usuario.nome} - {usuario.idade} anos
        </li>
      ))}
    </ul>
  );
}
```
Aqui usamos ``usuario.id`` como ``key``, melhor prática do que usar ``index``.

## Renderização condicional dentro da lista
Podemos aplicar condições diretamente no .map(). Exemplo: mostrar só usuários com mais de 30 anos.
```
<ul>
  {usuarios
    .filter(usuario => usuario.idade > 30)
    .map(usuario => (
      <li key={usuario.id}>{usuario.nome}</li>
    ))}
</ul>
```

## Resumindo
Usamos ``.map()`` para transformar arrays em elementos JSX.
Sempre adicionar a propriedade ``key`` para cada item.
Podemos combinar ``.map()``, ``.filter()`` e outras funções de array para manipular os dados antes da renderização.