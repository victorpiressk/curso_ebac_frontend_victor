## Eventos (v-on ou @)
Permite responder a eventos do usuário, como cliques ou digitação.
### Passo a passo:
1. No ``App.vue``, crie uma função:
```
<script setup>
  function mostrarAlerta() {
    alert("Botão clicado!")
  }
</script>
```
2. No ``<template>``, associe a função ao evento com ``v-on`` (ou ``@``):
```
<template>
  <button v-on:click="mostrarAlerta">Clique aqui</button>
  <!-- ou -->
  <button @click="mostrarAlerta">Clique aqui</button>
</template>
```
- Quando o botão for clicado, a função será executada.

## Eventos com reatividade
### Reatividade no Vue — ref vs reactive
O Vue 3 oferece duas APIs principais para criar estado reativo na Composition API:
- ref — para valores primitivos (número, string, boolean) ou quando você quer uma referência explícita.
- reactive — para criar objetos reativos (objetos/arrays) inteiros, retornando um proxy reativo.

### 1 ref — passo a passo
Quando usar: valores primitivos, contadores, strings isoladas ou quando quer manipular ``.value`` no código JS.
Passos:
1. Importe ``ref``
2. Crie a variável reativa
3. No JavaScript crie a função de evento usando ``.value``
4. No template (HTML) associe a função ao evento:
```
<script setup>
import { ref } from 'vue'

const contador = ref(0)         // valor reativo (número)
const nome = ref('Victor')      // string reativa

function decrementar() {
  contador.value--
}
</script>

<template>
  <div>
    <h2>Contador: {{ contador }}</h2>                       <!-- NÃO usar contador.value -->
    <p>Nome: {{ nome }}</p>
    <button @click="contador.value++">Incrementar</button>  <!-- também funciona chamar .value aqui -->
    <button @click="decrementar">Decrementar</button>
  </div>
</template>
```
Observações:
- Use ``ref`` quando precisar do ``.value`` em JS (bom para lógica) e de acesso direto no template.
- ``ref`` também é usado para referenciar elementos do DOM via ``ref="meuEl``".

### 2 ``reactive`` — passo a passo
Quando usar: quando precisar agrupar várias propriedades relacionadas (objeto com muitos campos), ou para trabalhar com arrays/objetos inteiros reativos.
Passos:
1. Importe ``reactive``
2. Crie um objeto reativo:
3. No JavaScript crie a função de evento (sem ``.value``)
No template, acesse as propriedades normalmente:
```
<script setup>
import { reactive } from 'vue'

const state = reactive({
  contador: 0,
  nome: 'Victor'
})

function incrementar() {
  state.contador++
}
function decrementar() {
  state.contador--
}
</script>

<template>
  <div>
    <h2>Contador: {{ state.contador }}</h2>
    <p>Nome: {{ state.nome }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>
```
Observações:
- ``reactive`` retorna um proxy que encapsula o objeto — não use destruturar direto (veja armadilhas abaixo).
- Ideal quando várias propriedades fazem parte do mesmo estado lógico.

### 3 Diferenças importantes (resumo prático)
Tipo:
- ``ref``: pensado para valores primitivos ou uma referência única.
- ``reactive``: pensado para objetos e arrays.
Acesso em JS:
- ``ref``: use ``.value``.
- ``reactive``: acesse as propriedades diretamente (``state.propriedade``).
No template:
- ambos são unwrapped — você usa ``{{ contador }}`` ou ``{{ state.contador }}`` sem ``.value``.
Quando preferir:
- Prefira ``ref`` para contadores, flags isoladas, inputs individuais.
- Prefira ``reactive`` para estado composto (objeto com várias propriedades).

## Eventos do DOM mais comuns
- No Vue.js, o v-on (ou o atalho @) é usado para escutar eventos do DOM. Depois de v-on: ou @, você
### Os eventos são os mesmos do JavaScript puro:
#### Mouse:
- click → quando o elemento é clicado
- dblclick → duplo clique
- mousedown → botão do mouse pressionado
- mouseup → botão do mouse solto
- mousemove → movimento do mouse
#### Teclado:
- keydown → tecla pressionada
- keyup → tecla solta
- keypress → tecla sendo pressionada
#### Formulários:
- submit → envio de formulário
- input → valor do campo alterado
- change → valor alterado e desfocado
- focus → campo em foco
- blur → campo perdeu o foco
#### Janela/Elemento:
- scroll → rolando conteúdo
- resize → redimensionamento da janela

### Exemplo de uso
```
<template>
  <div>
    <button @click="incrementar">Clique aqui</button>
    <input @keyup.enter="enviar" placeholder="Digite e pressione Enter" />
  </div>
</template>

<script setup>
function incrementar() {
  console.log('Botão clicado!')
}

function enviar() {
  console.log('Enter pressionado!')
}
</script>
```

### Modificadores de eventos
O Vue ainda permite modificadores que alteram o comportamento do evento:
- ``.stop`` → faz ``event.stopPropagation()`` (não propaga o evento para elementos pai)
- ``.prevent`` → faz ``event.preventDefault()`` (evita o comportamento padrão, ex: evitar submit recarregar a página)
- ``.capture`` → adiciona listener no modo de captura
- ``.once`` → evento é executado só uma vez
- ``.passive`` → indica que não vai chamar ``preventDefault`` (melhora performance em scroll)

Exemplo:
```
<!-- Impede o reload do formulário -->
<form @submit.prevent="salvar">
  <input type="text">
  <button>Enviar</button>
</form>
```