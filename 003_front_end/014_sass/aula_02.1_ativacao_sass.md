## Criação arquivo SASS
- Nomenclatura SASS: arquivo.sass
- Nomenclatura SCSS: arquivo.scss

## Ativação pacote SASS no projeto
- Passo 1: Abrir o terminal
- Passo 2: Acessar pasta do projeto pelo terminal
- Passo 3: Iniciar o node -> npm init
- Passo 4: Aplicar enter em todas opções de criação do projeto node
- Passo 5: Instalar o SASS no projeto -> npm i --save-dev sass
- Passo 6: Ocultar a pasta node_modules no git -> Criar arquivo .gitignore e adicionar o nome da pasta node_modules no arquivo
- Passo 7: Criar novo script no arquivo package.json -> "sass": "sass",
- Passo 8: Executar o comando do sass no terminal -> npm run sass
- Passo 9: Caso necessário, especificar o arquivo de entrada e o de saída no terminal -> npm run sass main.scss main.css

### Significados
- i -> install -> instalação
- --save-dev -> O pacote é necessário apenas durante o desenvolvimento do projeto
- Arquivo de entrada -> O arquivo que será utilizado como desenvolvimento do código
- Arquivo de saída -> O arquivo que será utilizado em produção