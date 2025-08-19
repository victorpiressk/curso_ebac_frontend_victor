## O que é o gulp
- O Gulp é uma ferramenta de automação de tarefas para front-end e back-end.
- Pensa nele como um "robôzinho" que faz tarefas repetitivas por você no processo de desenvolvimento.

### O que o Gulp faz?
- Ele é usado principalmente para automatizar coisas como:
- Compilar pré-processadores → (Sass, LESS, Stylus → CSS).
- Minificar arquivos → reduzir tamanho de CSS, JS, HTML.
- Concatenar arquivos → juntar vários arquivos JS ou CSS em um só.
- Otimizar imagens → deixar mais leves sem perder qualidade.
- Atualização automática → com browser-sync, o navegador recarrega sozinho quando você altera o código.
- Gerar versão final do projeto → tudo minificado e otimizado dentro de uma pasta build/ ou dist/.

### Como funciona o Gulp?
- Ele é instalado como dependência do Node.js.
- Você cria um arquivo gulpfile.js.
- Nesse arquivo você descreve as tarefas (tasks) que o Gulp deve executar.

## Criação arquivo gulp
- **Passo 1:** Abrir pasta do projeto no VS
- **Passo 2:** Criar arquivo -> gulpfile.js
- 

## Intalação gulp no terminal
- **Passo 1:** Abrir o terminal como adiministrador
- **Passo 2:** Iniciar a instalação do GULP -> Comando -> npm install --global gulp-cli

## Ativação gulp
- **Passo 1:** Acessar pasta do projeto pelo terminal
- **Passo 2:** Iniciar o node -> npm init
- **Passo 3:** Aplicar enter em todas opções de criação do projeto node
- **Passo 4:** Instalar o gulp no projeto -> npm i --save-dev gulp
- **Passo 5:** Criar novo script no arquivo package.json -> "gulp": "gulp",

## Execultar gulp
- **Passo 1:** Ocultar a pasta node_modules no git -> Criar arquivo .gitignore e adicionar o nome da pasta node_modules no arquivo
- **Passo 2:** npm run gulp
