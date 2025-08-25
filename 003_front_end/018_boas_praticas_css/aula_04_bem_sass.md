## Como utilizar a metodologia BEM com Sass?
- O BEM ajuda a organizar a nomenclatura das classes.
- O Sass ajuda a organizar o código CSS, principalmente com aninhamento (nesting).
- A junção dos dois deixa o código mais limpo, modular e reutilizável.

## Estrutura básica com BEM + Sass
```
.block {
  // estilos do bloco
  background: #f4f4f4;
  padding: 20px;

  &__element {
    // estilos do elemento
    font-size: 18px;
    color: #333;
  }

  &--modifier {
    // estilos do modificador
    background: #d9eaff;
    border: 1px solid #007bff;
  }
}
```

### Resultado em CSS:
```
.block {
  background: #f4f4f4;
  padding: 20px;
}

.block__element {
  font-size: 18px;
  color: #333;
}

.block--modifier {
  background: #d9eaff;
  border: 1px solid #007bff;
}
```

## Exemplo prático em HTML + Sass
### HTML:
```
<div class="card card--highlighted">
  <h2 class="card__title">Título</h2>
  <p class="card__description">Descrição do card</p>
</div>
```

### SCSS:
```
.card {
  background: #fff;
  padding: 15px;
  border: 1px solid #ccc;

  &__title {
    font-size: 22px;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 16px;
    color: #666;
  }

  &--highlighted {
    border-color: blue;
    background: #f0f8ff;
  }
}
```

### Resultado em CSS:
```
.card {
  background: #fff;
  padding: 15px;
  border: 1px solid #ccc;
}

.card__title {
  font-size: 22px;
  margin-bottom: 10px;
}

.card__description {
  font-size: 16px;
  color: #666;
}

.card--highlighted {
  border-color: blue;
  background: #f0f8ff;
}
```

## Boas práticas com BEM + Sass
- Use nesting do Sass somente até 2 níveis, para não perder clareza.
- Organize blocos grandes em arquivos separados (_card.scss, _button.scss, etc.) e importe no main.scss.
- Evite criar modificadores que alterem muitos estilos ao mesmo tempo, mantenha-os simples.