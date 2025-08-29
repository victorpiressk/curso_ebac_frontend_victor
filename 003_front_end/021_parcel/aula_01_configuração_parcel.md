## O que é o Parcel
- O Parcel é um bundler de aplicações web, parecido com Webpack, mas com foco em simplicidade e zero configuração inicial.
- Ele pega seus arquivos de projeto (HTML, CSS, JS, imagens, fontes, etc.), analisa as dependências e gera uma versão otimizada para produção.

## Principais características
- Zero configuração – em muitos casos, basta rodar parcel index.html e ele já entende as dependências.
- Suporte a múltiplos formatos – JavaScript, TypeScript, Sass, imagens, etc.
- Hot Module Replacement (HMR) – atualiza a página automaticamente quando você altera o código.
- Build otimizado – minifica, faz tree-shaking, cria bundles menores.
- Suporte a ES Modules e CommonJS – você pode usar import/export modernos sem problemas.

## Configuração inicial
### 1. Inicializar um novo projeto Node.js:
1. Acessar a pasta do projeto pelo terminal.  
2. Iniciar o Node no projeto: ``npm init --yes``

**OBS:** ``--yes`` serve para pular etapa de configuração do projeto Node.js 

### 2. Instalar parcel global ou local:
- Instalação global: ``npm install -g parcel``
- Intalação diretamente no projeto: ``npm install --save-dev parcel``

### 3. Criar estrutura de pastas:
```
meu-projeto/
 ├── package.json
 └── src/
     └── index.html
     └── styles/
         └── main.scss
     └── scripts/
         └── main.js
```
### 4. Configurar parcel no package.json:
- Configuração de desenvolvimento parcel: ``"dev": "parcel src/index.html src/styles/main.scss src/scripts/main.js",``

**OBS:** Os caminhos servem para indicar onde o parcel será executado

### 5. Executar build de desenvolvimanto:
1. Acessar a pasta do projeto pelo terminal.
2. Executar comando de build: ``npm run dev``

## Possível erro de build
### Descrição do erro:
- The "main" field is meant for libraries, not applications. Either remove the "main" field or choose a different target name.

### Por que isso acontece:
- Esse erro acontece porque no seu package.json existe a chave "main": "index.js".
- O Parcel diferencia aplicações de bibliotecas.
- O campo "main" só faz sentido em bibliotecas (quando você vai publicar no npm).
- Quando o Parcel vê "main", ele acha que seu projeto é uma biblioteca e não uma aplicação web.

### Como resolver:
- Remover o campo main:
    - No package.json, apague a linha: ``"main": "index.js",``

## Servidor Interno
### Servidor de desenvolvimento embutido
- Quando você executa parcel src/index.html ou npm run dev, o Parcel inicia um servidor HTTP próprio.
- Esse servidor serve seus arquivos diretamente da memória, sem precisar gravar tudo em dist a cada atualização.

### Porta padrão e acesso
- O servidor roda por padrão em: ``http://localhost:1234``
- Após o comando de build pode acessar pelo terminal (ctrl + click): ``Server running at http://localhost:1234`` 
- Também pode mudar a porta com: ``parcel src/index.html --port 3000``