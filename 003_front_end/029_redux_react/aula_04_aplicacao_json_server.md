## Fork projeto ebac_games_redux
1. Acessar o link: https://github.com/ogiansouza/ebac_games_redux
2. Criar Forking do projeto.
3. Fazer o Git clone.

## Ativar Json-Server + Executar Projeto
1. Instalar dependências do projeto: ``npm install``
2. Corrigir código com ESLint (opcional): ``npx eslint --fix .``
3. Ativar simulação da API com Json-Server:  ``npx json-server db.json --port 4000``
    - O servidor ficará disponível em ``http://localhost:4000``
5. Em outro terminal, iniciar a aplicação: ``npm start``