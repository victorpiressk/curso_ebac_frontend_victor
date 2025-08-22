## O que são Mixins?
### Mixin = bloco de código CSS reutilizável.
- Você pode incluir esse bloco dentro de outros seletores apenas chamando o nome do mixin.
- Isso ajuda a evitar repetição e organizar melhor o código.
## Como funciona os Mixins no LESS?
- Um mixin no LESS parece com uma classe CSS, mas na verdade ele não gera nada sozinho.
- Ele só gera CSS quando você o chama dentro de outro seletor.
- Diferente de uma classe CSS normal (que o HTML usa com class="..."), o mixin é apenas um recurso de escrita dentro do LESS, ou seja, o navegador nunca vê ele — apenas o CSS final.
## Exemplo 1 – Mixin básico
### Criando um mixin
````
.borda-arredondada {
  border-radius: 10px;
  border: 1px solid #333;
}
````
### Usando o mixin
````
.card {
  .borda-arredondada;
  background: #f4f4f4;
}

.button {
  .borda-arredondada;
  background: blue;
  color: white;
}
````
### O compilador gera no CSS:
````
.card {
  border-radius: 10px;
  border: 1px solid #333;
  background: #f4f4f4;
}

.button {
  border-radius: 10px;
  border: 1px solid #333;
  background: blue;
  color: white;
}
````
## Exemplo 2 – Mixins com parâmetros
- Você pode deixar o mixin flexível, aceitando valores:

### Mixin com parâmetros
````
.sombra(@x: 2px, @y: 2px, @blur: 5px, @cor: #000) {
  box-shadow: @x @y @blur @cor;
}
````
### Usando o mixin
````
.card {
  .sombra(4px, 4px, 10px, rgba(0,0,0,0.5));
}
````
### Resultado em CSS:
````
.card {
  box-shadow: 4px 4px 10px rgba(0,0,0,0.5);
}
````
## Exemplo 3 – Mixins condicionais

### Mixins podem até usar condições:
````
.texto-colorido(@cor) when (lightness(@cor) > 50%) {
  color: black;
  background: @cor;
}
.texto-colorido(@cor) when (lightness(@cor) <= 50%) {
  color: white;
  background: @cor;
}

.caixa1 {
  .texto-colorido(#eee); // fundo claro → texto preto
}
.caixa2 {
  .texto-colorido(#222); // fundo escuro → texto branco
}
````
## Resumindo:
- Mixins no LESS = blocos de código CSS reutilizáveis.
- Podem ter parâmetros, valores padrão e até condições.
- Servem para organizar e evitar repetição no CSS.
