## O que é um Componente?
### Um componente Vue é como um bloco independente da sua interface:
- Tem seu template (HTML)
- Pode ter lógica (JavaScript/TypeScript)
- Pode ter estilo próprio (CSS/SCSS)
- Pode ser reutilizado em várias partes da aplicação

## Exemplo passo a passo de componentização
### 1. Criar um novo componente
Crie um arquivo, por exemplo: ``src/components/BotaoContador.vue``
```
<template>
  <button @click="contador++">
    Cliquei {{ contador }} vezes
  </button>
</template>

<script setup>
import { ref } from 'vue'

const contador = ref(0)
</script>

<style scoped>
button {
  padding: 10px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
```

### 2. Importar e usar o componente no App.vue
src/App.vue
```
<script setup>
import BotaoContador from './components/BotaoContador.vue'
</script>

<template>
  <h1>Exemplo de Componentização</h1>
  <BotaoContador />
  <BotaoContador />
</template>
```
- Agora temos dois botões independentes, cada um com seu próprio contador.

## Comunicação entre Componentes
No Vue, componentes podem receber dados (props) e enviar eventos (emits):

### Passando props (pai → filho)
```
<!-- Pai -->
<BotaoContador texto="Curtir" />
<BotaoContador texto="Compartilhar" />
```
```
<!-- Filho: BotaoContador.vue -->
<template>
  <button @click="contador++">{{ texto }} ({{ contador }})</button>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  texto: String
})

const contador = ref(0)
</script>
```

### Emitindo eventos (filho → pai)
```
<!-- Pai -->
<BotaoContador texto="Curtir" @clicado="mensagem = $event" />
<p>{{ mensagem }}</p>
```
```
<!-- Filho -->
<template>
  <button @click="$emit('clicado', 'Botão foi clicado!')">{{ texto }}</button>
</template>

<script setup>
const props = defineProps({ texto: String })
const emit = defineEmits(['clicado'])
</script>
```

## Resumindo:
- Componentes ajudam a organizar e reutilizar o código.
- Comunicação acontece via props (entrada) e emits (saída).
- Cada componente pode ter lógica, estilo e template isolados.