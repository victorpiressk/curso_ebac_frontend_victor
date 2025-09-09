## Renderização Condicional (v-if, v-else-if, v-else)
Permite mostrar ou esconder elementos do HTML com base em condições.
### Passo a passo:
1. No App.vue, crie uma variável booleana:
```
<script setup>
  const logado = true
  const semPermissao = false
</script>
```
2. No <template>, use v-if para exibir condicionalmente:
```
<template>
  <p v-if="logado">Bem-vindo, usuário!</p>
  <p v-else-if="">Você não tem acesso.</p>
  <p v-else>Por favor, faça login.</p>
</template>
```
- O conteúdo mostrado no HTML depende do valor da variável logado.