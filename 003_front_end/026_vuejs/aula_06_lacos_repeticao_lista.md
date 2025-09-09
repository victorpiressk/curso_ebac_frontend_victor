## Laços de Repetição (v-for)
### Serve para criar listas de elementos com base em arrays.
Passo a passo:
1. No ``App.vue``, crie um array:
```
<script setup>
  const linguagens = ["JavaScript", "Python", "TypeScript"]
</script>
```
2. No ``<template>``, use ``v-for`` para renderizar cada item do array:
```
<template>
  <ul>
    <li v-for="linguagem in linguagens" :key="linguagem">{{ linguagem }}</li>
  </ul>
</template>
```
- O Vue vai criar automaticamente um ``<li>`` para cada item da lista.
- **OBS:** A renderização de um array com ``v-for`` funciona em qualquer tag.
