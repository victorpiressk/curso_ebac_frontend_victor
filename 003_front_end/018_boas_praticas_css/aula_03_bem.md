## O que é a metodologia BEM?
- BEM (Block, Element, Modifier) é uma metodologia de organização e nomenclatura de classes CSS.
- Criada pelo Yandex, tem como objetivo tornar o código mais legível, previsível e reutilizável.
- A ideia principal é separar a interface em blocos independentes, que podem ser facilmente combinados.

## Estrutura do BEM
### 1. Block (Bloco)
- Representa um componente independente que pode ser reutilizado.
- Pode ser um menu, um botão, um card, etc.
#### Exemplo:
```
.menu { }
.button { }
.card { }
```

### 2. Element (Elemento)
- É uma parte do bloco, que não faz sentido existir sozinho.
- É representado por __ (dois underlines).
#### Exemplo:
```
.menu__item { }
.card__title { }
.card__image { }
```

### 3. Modifier (Modificador)
- Define uma variação ou estado de um bloco ou elemento.
- É representado por -- (dois hífens).
#### Exemplo:
```
.button--primary { }
.button--secondary { }
.card--highlighted { }
```

## Exemplo prático em HTML + CSS
```
<div class="card card--highlighted">
    <h2 class="card__title">Título do Card</h2>
    <p class="card__text">Esse é um exemplo de BEM.</p>
    <button class="button button--primary">Ação</button>
</div>
```
```
.card {
    border: 1px solid #ccc;
    padding: 20px;
}

.card--highlighted {
    border-color: blue;
    background: #f0f8ff;
}

.card__title {
    font-size: 20px;
}

.button {
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

.button--primary {
    background: blue;
    color: white;
}
```

## Vantagens do BEM
- Código modular e escalável.
- Padronização de nomenclatura de classes.
- Facilita a reutilização de componentes.
- Evita conflitos de CSS em projetos grandes.
- Torna o HTML e CSS mais legível e autoexplicativo.