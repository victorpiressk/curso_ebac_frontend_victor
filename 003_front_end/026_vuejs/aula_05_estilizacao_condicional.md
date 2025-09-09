## Estilização condicional VueJS
- No Vue.js, a estilização condicional permite mudar classes ou estilos de um elemento dinamicamente com base em valores reativos.
- Existem duas formas principais: com ``:class`` e com ``:style``.

### 1. Estilização condicional com :class
Você pode adicionar/remover classes CSS dependendo de uma condição.
- Exemplo básico
```
<template>
  <div>
    <p :class="{ ativo: isAtivo, desativado: !isAtivo }">
      Status: {{ isAtivo ? 'Ativo' : 'Desativado' }}
    </p>
    <button @click="isAtivo = !isAtivo">Alternar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isAtivo = ref(true)
</script>

<style>
.ativo {
  color: green;
  font-weight: bold;
}
.desativado {
  color: red;
  text-decoration: line-through;
}
</style>
```
O Vue adiciona a classe **.ativo** ou **.desativado** automaticamente dependendo do valor de ``isAtivo``.

### 2. Estilização condicional com :style
Aqui você manipula CSS inline dinamicamente.
- Exemplo básico
```
<template>
  <div>
    <p :style="{ color: isAtivo ? 'green' : 'red', fontSize: tamanho + 'px' }">
      Texto com estilo dinâmico
    </p>
    <button @click="isAtivo = !isAtivo">Alternar Cor</button>
    <button @click="tamanho += 2">Aumentar Fonte</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isAtivo = ref(true)
const tamanho = ref(16)
</script>
```
O texto troca entre verde/vermelho e o tamanho da fonte aumenta ao clicar.

## Resumindo
- ``:class`` → usado para alternar classes CSS inteiras
- ``:style`` → usado para aplicar propriedades CSS inline diretamente