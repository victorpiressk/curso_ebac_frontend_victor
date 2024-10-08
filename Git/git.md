Anotações GIT

## Terminal Powershell e Git Stage

### Comandos básicos:

- Listar o conteúdo da pasta atual ---- ls
- Limpar o conteúdo do terminal ------- CTRL + L ou cls
- Navegar entre pastas ---------------- cd pasta_destino
- Voltar para pasta anterior ---------- cd ..
- Criar uma nova pasta ---------------- mkdir nome_pasta
- Criar um novo arquivo / alterar ----- echo "conteúdo"> destino.txt
- Remover pasta ----------------------- rm –r ./nome_pasta
- Remover arquivo --------------------- rm –r ./arquivo.txt
- Ver o conteúdo de um arquivo -------- cat ./arquivo.txt

### Configurar o GIT:

- Configurar nome ------------ git config --global user.name “Seu nome”
- Configurar e-mail ---------- git config --global user.email “Seu e-mail”
- Configurar editor nano ----- git config --global core.editor “nano”

### Adicionar e remover arquivos no Stage:

- Iniciar criação de repositório ---- git init
- Verificar status ------------------ git satus
- Adicionar arquivos ---------------- git add nome_do_arquivo
- Remover arquivos ------------------ git rm --cached nome_do_arquivo
- Adicionar todos arquivos ---------- git add .
- Criar um Commit ------------------- git commit -m “Descrição do arquivo"

### Salvar alterações no Stage:

- Salvar alterações no Commit ---- git commit -am “Descrição da alteração"

### Padrões para nomear commits:

- Pequenas alterações (Chore)
git commit –m “chore: removendo arquivo.txt”

- Correções (Fix)
git commit –m “fix: correção no cálculo de médias”
 
- Inclusão de funcionalidade no projeto (Feat)
git commit –m “feat: inclusão de função para calcular mediana”

- Atualização de documentação (Docs) 
git commit –m “atualizando o changelog.md”


### Liste alterações (Logs):

- Visualizar os últimos commits ------ git log –n 2 (ou outro número)
- Visualizar uma versão resumida ----- git log --oneline
- Visualizar uma versão detalhada ---- git log --stat
- Mesclar os tipos de visualização --- git log --stat –n 2 --oneline

### Consulte o histórico:

- Desfazer alterações ---------------- git checkout nome_arquivo
- Navegar entre commits -------------- git checkout COMMIT_ID
- Reverter commits ------------------- git revert HEAD COMMIT_ID

### Crie ramificações no código (Branches):

- Listar as branches ------------ git branch
- Criar uma branch -------------- git branch nova_branch
- Criar branch referencia ------- git branch nova_branch branch_referencia
- Criar e acessar uma branch ---- git checkout –b nome_branch
- Navegar entre branches -------- git checkout nome_branch
- Deletar uma branch ------------ git branch –d nome_branch

### Convenções para nomear branches:

No dia a dia seguimos um padrão para a nomenclatura de branches, o que nos facilita a identificação de seu conteúdo.

Seguem alguns padrões: 

- hotfix/nome_do_bug: usado para correções rápidas. 

Exemplo: o botão de adicionar ao carrinho não funciona, a correção do bug é feita numa branch hotfix.

- bugfix/nome_do_bug: correção de um bug que não é um impeditivo ao usuário, não compromete um fluxo do site.

- feature/nome_da_funcionalidade: a adição de uma funcionalidade será contida nessa nova branch, até que ela esteja desenvolvida e validada. 

Exemplo: feature/add_to_favorites.

### Resolva conflitos (Merge):

- Mesclar branches ------------------- git merge nome_branch

Apesar do Git ser uma ótima ferramenta para o trabalho em equipe, ele não pode impedir que duas pessoas alterem o mesmo arquivo. Imagine que o arquivo teste.html foi alterado na branch X e na branch Y, no momento em que o merge for realizado o Git criará um conflito, pois ele não sabe qual versão considerar. Esse conflito deverá ser resolvido de forma manual.

### Controle a versão (Github):

- Baixar um projeto (clonar) -------- git clone LINK –l pasta_destino

obs.: O parâmetro –l é opcional, sem ele será criada uma pasta com o nome do repositório.

- Enviar atualizações branch main --- git push
- Receber atualizações branch main -- git pull
- Enviar uma determinada branch ----- git push origin nome_da_branch


### Changelog 

Trata-se de um arquivo onde registramos todas as mudanças que aconteceram em um projeto no decorrer do tempo. 

Saiba mais acessando o link 
https://keepachangelog.com/pt-BR/1.0.0/#:~:text=Um%20changelog%20%C3%A9%20um%20arquivo,cada%20vers%C3%A3o%20de%20um%20projeto
