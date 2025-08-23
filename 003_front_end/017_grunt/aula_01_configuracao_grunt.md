## O que é o Grunt
- O **Grunt** é uma ferramenta de automação de tarefas baseada em **Node.js**, parecida com o Gulp.  
- Ele também funciona como um "robôzinho" que automatiza tarefas repetitivas no desenvolvimento de projetos front-end e back-end.  

### O que o Grunt faz?
- Ele é usado principalmente para automatizar processos como:  
- Compilar pré-processadores → (Sass, LESS, Stylus → CSS).  
- Minificar arquivos → reduzir tamanho de CSS, JS, HTML.  
- Concatenar arquivos → juntar vários arquivos em um só.  
- Otimizar imagens → reduzir peso sem perder qualidade.  
- Atualização automática → com plugins, o navegador recarrega sozinho quando você altera o código.  
- Gerar versão final do projeto → tudo otimizado em uma pasta `dist/`.  

### Como funciona o Grunt?
- É instalado como dependência do Node.js.  
- Você cria um arquivo chamado **Gruntfile.js**.  
- Nesse arquivo você configura as tarefas (tasks) que o Grunt deve executar.  
- Diferente do Gulp, o Grunt utiliza **configurações em JSON** dentro do Gruntfile para rodar os plugins.  

## Criação arquivo Grunt
- **Passo 1:** Abrir pasta do projeto no VS.  
- **Passo 2:** Criar arquivo -> **Gruntfile.js**.  

## Instalação Grunt no terminal
- **Passo 1:** Abrir o terminal como administrador.  
- **Passo 2:** Instalar o CLI do Grunt globalmente →  
```
npm install -g grunt-cli
```  

## Ativação Grunt
- **Passo 1:** Acessar a pasta do projeto pelo terminal.  
- **Passo 2:** Iniciar o Node no projeto →  
```
npm init
```  
- **Passo 3:** Dar enter em todas opções ou preencher conforme desejar.  
- **Passo 4:** Instalar o Grunt como dependência →  
```
npm i --save-dev grunt
```
- **Passo 5:** Criar novo script no arquivo package.json -> "grunt": "grunt",
## Configuração inicial do Grunt
- Para começar a usar o **Grunt**, é preciso configurar o ambiente do projeto.
- Essa configuração inicial é feita através de dois arquivos principais:
  - **package.json** → descreve as dependências do projeto.
  - **Gruntfile.js** → arquivo onde ficam definidas as tarefas (tasks) do Grunt.
```
module.exports = function(grunt) {
    // Configuração das tarefas
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    // Registro da tarefa padrão
    grunt.registerTask('default', []);
};
```
## Executar Grunt
- **Passo 1:** Ocultar a pasta `node_modules` no Git → Criar arquivo `.gitignore` e adicionar o nome da pasta.  
- **Passo 2:** Rodar o Grunt no terminal →  
```
npm run grunt
```  
