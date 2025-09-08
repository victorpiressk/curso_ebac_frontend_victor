## O que é o VueJS?
- O Vue.js é um framework progressivo de JavaScript usado para construir interfaces de usuário (UI) e aplicações web reativas.
- Ele é chamado de progressivo porque você pode usá-lo de forma bem simples (apenas para manipular partes do HTML) ou de forma mais avançada (criando aplicações completas com rotas, gerenciamento de estado, build system, etc.).

## Principais características do Vue.js
### Reatividade:
- Quando os dados mudam, a interface atualiza automaticamente, sem precisar manipular o DOM manualmente.

### Sintaxe simples e declarativa:
- Usa uma estrutura clara baseada em templates HTML, onde você mistura HTML, CSS e JS de forma organizada.

### Componentização:
- Você pode dividir sua aplicação em componentes reutilizáveis, o que facilita a manutenção e escalabilidade do código.

### Progressivo:
- Pode ser usado só para melhorar um formulário simples.
- Ou para construir SPAs (Single Page Applications) completas.

### Ecosistema forte:
- Vue Router → para navegação entre páginas.
- Pinia (ou Vuex, mais antigo) → para gerenciamento de estado global.
- Vite (ou Webpack) → para build e otimização.

## Instalação VueJS
- A instalação do Vue.js pode ser feita de formas diferentes, dependendo do objetivo.

### 1. Usando direto via CDN (para testes rápidos)
- Ideal se você só quer testar o Vue em um arquivo HTML simples.
```
<div id="app">
  <h1>{{ mensagem }}</h1>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script>
  const { createApp } = Vue;
  createApp({
    data() {
      return {
        mensagem: "Olá Vue 3!"
      };
    }
  }).mount("#app");
</script>
```
- Não precisa instalar nada, basta ter o HTML.

### 2. Usando NPM (para projetos maiores)
- Esse é o jeito mais usado em projetos reais.
1. Criar um projeto novo: ``npm create vue@latest``
    - Ele vai abrir um assistente interativo perguntando:
        - Nome do projeto
        - Se deseja usar TypeScript
        - Se quer incluir Router, Pinia (estado global), ESLint etc.
    - No primeiro momento, pode colocar não em todas opções, dependendo do objetivo do projeto. 

2. Entrar na pasta do projeto: ``cd nome-do-projeto``
3. Instalar dependências: ``npm install``
4. Rodar o servidor de desenvolvimento: ``npm run dev``
5. O terminal vai mostrar um link (normalmente http://localhost:5173/) onde sua aplicação Vue estará rodando.

### 3. Usando Vite diretamente
- Se quiser um setup mais manual, pode usar o Vite, que é o bundler oficial do Vue 3.
```
npm create vite@latest nome-do-projeto
```
- Na escolha do framework, selecione:
```
✔ Select a framework: › Vue
✔ Select a variant: › JavaScript
```
- Depois:
```
cd nome-do-projeto
npm install
npm run dev
```

## Configuração VueJS
### Baixar extenção do Vue no VS
Por padrão, o VS não reconhece a linguagem do Vue, para isso é necessário baixar a instenção. Caso já tenha baixado, não é necessário seguir o passo a passo abaixo.
1. Acessar a aba de extenções do VS
2. Pesquisar por Vue
3. Instalar a extenção Vue (Official) - vuejs.org

### Limpar template inicial do Vue
1. Abrir pasta ``src``
2. Deletar as pastas ``assets`` e ``components`` (Terá que permitir que o windows realize a ação)
3. No deletar as referencias do ``App.vue`` (apagar os conteúdos e deixar apenas as tags de criação) Ex:
```
<script setup>
</script>

<template>
  <h1>teste</h1>
</template>

<style scoped>
</style>
```
4. Dentro do main.js deve remover arquivo de referencia do CSS ``import './assets/main.css'``
