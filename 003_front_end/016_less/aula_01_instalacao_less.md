## O que é o LESS?
- O LESS (Leaner Style Sheets) é um pré-processador CSS, assim como o Sass.
- Ele estende as funcionalidades do CSS com recursos extras que não existem no CSS puro, permitindo que você escreva estilos de forma mais organizada, reutilizável e dinâmica.
## Instalação LESS
- **Passo 1:** Acessar pasta do projeto pelo terminal
- **Passo 2:** Instalar a dependencia do LESS de forma global -> npm i -g less
- **Passo 3:** Iniciar o node -> npm init
- **Passo 4:** Aplicar enter em todas opções de criação do projeto node
- **Passo 5:** Instalar o less no projeto -> npm i --save-dev less
- **Passo 6:** Ocultar a pasta node_modules no git -> Criar arquivo .gitignore e adicionar o nome da pasta node_modules no arquivo
## Ativação LESS
- **Passo 1:** Compilar o less -> Criar novo script no arquivo package.json -> "less": "lessc ./src/styles/main.less ./build/styles/main.css",
- **OBS:** O "c" no final do less significa compilador, o primeiro caminho significa os dados fonte e o segundo caminho significa os dados de destino
- **Passo 2:** Criar estrutura de pastas
````
meu-projeto/
 ├── package.json
 └── src/
     └── styles
         └── main.less
````
- **OBS:** Como será feita uma compilação, as pastas de build/styles serão criadas automaticamente
- **Passo 3:** Executar o less -> npm run less
## Ativar o watch no LESS
### O less por padrão não possui a função do watch quando utilizamos ele via linha de comando
#### Para isso, é necessário instalar um plugin:
- **Passo 1:** Abrir o terminal
- **Passo 2:** Instalar de forma global o plugin watch compile -> npm i -g less-watch-compiler
- **Passo 3:** Acessar a pasta do projeto pelo terminal
- **Passo 4:** Instalar o plugin watch compile no projeto -> npm i --save-dev less-watch-compiler
- **Passo 5:** Alterar o script no arquivo package.json -> "less": "less-watch-compiler ./src/styles ./build/styles",
- **Passo 6:** É possível adicionar um terceiro argumento no script, sendo ele o arquivo principal do less -> "less": "less-watch-compiler ./src/styles ./build/styles main.less",