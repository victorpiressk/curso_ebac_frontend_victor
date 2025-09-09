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