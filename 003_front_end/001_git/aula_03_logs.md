## Visualizando commits realizados

- Passo 1: Comando visualizar commits -> git log

### A lista de commits é composto por 4 informações

- Identificador/código
- Author/email do author do commit
- Data de realização do commit
- Mensagem adicionada no commit

## Variações na visualização de commits

- Tipo 1: Visualizar os ultimos logs realizados -> git log -n 2 [ O valor depois do -n vai indicar quantos logs deseja visualizar ]
- Tipo 2: Visualizar logs de forma resumida -> git log --oneline
- Tipo 3: Visualizar logs e conteúdo alterado -> git log --stat
- Tipo 4: Unir tipos de visualização de logs -> git log -n 3 --oneline

## Visualizar histórico de logs no VS

- Passo 1: Pesquisar e baixar extenção no VS -> git history
- Passo 2: Aperte F1
- Passo 3: Pesquise -> git view history (git log)