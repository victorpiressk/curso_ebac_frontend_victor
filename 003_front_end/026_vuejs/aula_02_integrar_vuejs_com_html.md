## manipular HTML com VueJS
- Quando você usa Vue.js, a manipulação do HTML não é feita de forma direta (como no document.querySelector ou innerHTML).
- O Vue segue o princípio de reatividade, ou seja, você manipula os dados no JavaScript, e o Vue atualiza automaticamente o HTML ligado a esses dados.

### 1. Interpolação ({{ }})
A interpolação serve para exibir valores JavaScript no HTML de forma reativa.
Passo a passo:
1. Acesse o arquivo App.vue.
2. Na seção ``<script setup>``, crie uma variável, por exemplo:
```
<script setup>
  const nome = "Victor"
</script>
```
3. Na seção ``<template>``, utilize a sintaxe ``{{ }}`` para exibir o valor no HTML:
```
<template>
  <h1>{{ nome }}</h1>
</template>
```
- **Resultado:** o valor da variável nome definido no JavaScript será exibido dentro do HTML, e caso a variável seja alterada, o conteúdo no HTML será atualizado automaticamente.
- A interpolação também serve para exibir variaveis, objetos, funções e etc.

### 2. Atributos Dinâmicos (v-bind)
Permite ligar valores do JavaScript a atributos HTML.
Passo a passo:
1. No ``App.vue``, crie uma variável para armazenar a URL:
```
<script setup>
  const imagem = "https://vuejs.org/images/logo.png"
</script>
```
2. No ``<template>``, use ``v-bind`` (ou a forma abreviada ``:``) para ligar a variável ao atributo ``src``:
```
<template>
  <img v-bind:src="imagem" alt="Logo VueJS" />
  <!-- ou -->
  <img :src="imagem" alt="Logo VueJS" />
</template>
```
- Assim, o ``src`` da imagem será controlado pelo valor da variável ``imagem``.