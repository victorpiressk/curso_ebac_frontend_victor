# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Changelog 

Trata-se de um arquivo onde registramos todas as mudanças que aconteceram em um projeto no decorrer do tempo. 

Saiba mais acessando o link 
https://keepachangelog.com/pt-BR/1.0.0/#:~:text=Um%20changelog%20%C3%A9%20um%20arquivo,cada%20vers%C3%A3o%20de%20um%20projeto

## [0.0.6] - 2024-09-25

### Added

- Padrões para nomear commits:

Chore: usado para pequenas tarefas:      git commit  –m “chore: removendo arquivo.txt” 
Fix: correções:                          git commit  –m “fix: correção no cálculo de médias” 
Feat: inclusão de funcionalidade:        git commit  –m “feat: inclusão de função para calcular mediana” 
Docs: atualização de documentação:       git commit  –m “atualizando o changelog.md”


## [0.0.5] - 2024-09-25

### Added
- Salvar alterações no Stage:

- Descrição dos comandos                 Powershell

Salvar alterações                        git commit -am “Descrição da alteração"


## [0.0.4] - 2024-09-25

### Added
- Adicionar e remover arquivos no Stage:

- Descrição dos comandos                 Powershell

Iniciar criação de repositório           git init
Verificar status                         git satus
Adicionar arquivos                       git add nome_do_arquivo
Remover arquivos                         git rm --cached nome_do_arquivo
Adicionar todos arquivos                 git add
Criar um Commit                          git commit -m “Descrição do arquivo"


## [0.0.3] - 2024-09-25

### Added
- Configurar o GIT:

- Descrição dos comandos                 Powershell

Configurar nome                          git config  --global user.name “Seu nome”
Configurar e-mail                        git config  --global user.email “Seu e-mail”
Configurar editor nano                   git config  --global core.editor “nano”


## [0.0.2] - 2024-09-25

### Added

## Comandos básicos Powershell GIT:

### Descrição dos comandos                 

- Listar o conteúdo da pasta atual         ls
- Limpar o conteúdo do terminal            CTRL + L ou cls
- Navegar entre pastas                     Cd ./pasta_destino
- Criar uma nova pasta                     mkdir nome_pasta
- Criar um novo arquivo / alterar          echo "conteúdo"> destino.txt
- Remover pasta                            rm –r ./nome_pasta
- Remover arquivo                          rm –r ./arquivo.txt
- Ver o conteúdo de um arquivo             cat ./arquivo.txt


## [0.0.1] - 2024-07-14

### Added
- Added changelog.md