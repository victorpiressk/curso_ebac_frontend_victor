## Módulos CSS
- **Passo 1:** Criar novo arquivo scss **ex:** reset.scss
- **Passo 2:** Importar arquivo criado no principal sem a extenção -> @use 'reset';

## Estrutura de pastas dentro da pasta source
- **Passo 1:** Criar uma pasta para configurações do css
- **Passo 2:** Criar um arquivo de reset -> reset.scss
- **Passo 3:** Criar um arquivo para as cores scss -> cores.scss
- **Passo 4:** Criar uma pasta para seções do projeto
- **Passo 5:** Criar um arquivo scss para cada seção que o projeto tiver
- **Passo 6:** Importar os arquivos criados no scss principal -> @use 'config/reset'; @use 'config/cores'; @use 'secoes/produtos'; @use 'secoes/promocoes';
- **OBS:** O arquivo de cores precisa ser importado em todos os arquivos que utilizar as variaveis de cores e o valor da propriedade precisa conter o nome do arquivo antes da variavel **ex:** background-color: cores.$corDeFundo; 