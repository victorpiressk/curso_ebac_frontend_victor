## Estrutura de pastas
- **Passo 1:** Criar a pasta source (Onde ficam os arquivos fonte)
- **Passo 2:** Criar o arquivo main.scss na pasta source
- **Passo 3:** Criar a pasta build ou dist (Onde ficam os arquivos gerados pelo processo de build)
- **Passo 4:** Adicionar o caminho do css no html -> href=build/main.css ou href=dist/main.css
- **Passo 5:** Criar os arquivos via automação no package.json -> "sass": "sass", -> "sass": "sass source/main.scss build/main.css",
- **Passo 6:** Executar o comando do sass no terminal para verificar se os arquivos foram criados -> npm run sass
- **OBS:** Ao criar os arquivos via automação no package.json é possível adicionar o comando --watch ("sass": "sass", -> "sass": "sass source/main.scss build/main.css --watch",) para não precisar executar o comando do sass no terminal toda vez que realizar uma alteração -> npm run sass --watch