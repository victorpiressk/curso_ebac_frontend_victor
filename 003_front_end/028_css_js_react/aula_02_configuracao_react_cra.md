# Criar um projeto com Create React App
1. Verifique os requisitos: ``node -v   # recomendo Node 16+ (ou 18+)`` e ``npm -v``
2. Rode o comando: ``npx create-react-app meu-projeto``
    - Variante → TypeScript ``npx create-react-app meu-projeto --template typescript``
3. Entre na pasta do projeto: ``cd meu-projeto``
4. Inicie o servidor de desenvolvimento: ``npm start``

### Estrutura básica gerada
```
meu-projeto/
├─ node_modules/
├─ public/
│  └─ index.html
├─ src/
│  ├─ App.css
│  ├─ App.jsx       <-- componente principal (JSX)
│  ├─ index.js
│  └─ ...
├─ package.json
└─ README.md

# Com TypeScript
meu-projeto/
├─ src/
│  ├─ App.tsx         <-- componente principal em TSX
│  ├─ index.tsx
│  ├─ react-app-env.d.ts
│  └─ ...
├─ tsconfig.json      <-- configuração TypeScript
├─ package.json
```
- Arquivos principais usarão .tsx (componentes) e .ts (códigos sem JSX).
- tsconfig.json já vem criado com as opções recomendadas para CRA.

## Soluções de problemas rápido
### Se npx create-react-app falhar:
- forçar a versão: ``npx create-react-app@latest meu-projeto`` ou ``npx create-react-app@latest meu-projeto --template typescript``
- limpar cache do npx: (reabrir terminal normalmente ajuda)
- checar proxy/firewall ou permissões.
- Erro de permissão no Windows: execute o terminal como Administrador ou ajuste permissões da pasta.
- Se ``npm start`` travar: verifique versões de Node/NPM e logs no terminal.

# Configurações extras úteis (opcionais)
## EditorConfig
O arquivo EditorConfig serve para padronizar estilo de código (indentação, charset, final de linha etc.) entre diferentes editores/IDEs dentro do projeto. Quando seu editor/IDE tem o plugin EditorConfig, ele lê esse arquivo automaticamente e aplica as regras.
- Criar arquivo ``.editorconfig`` na raiz do projeto.
- Baixar extenção do EditorConfig no VS. Caso já tenha, não é necessário seguir o passo a passo abaixo.
  1. Acessar a aba de extenções do VS
  2. Pesquisar por editorconfig
  3. Instalar a extenção EditorConfig for VS Code - EditorConfig 
- Configurar arquivo ``.editorconfig``:
```
# Indica que este é o arquivo raiz de configuração
root = true

# Regras para todos os arquivos
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

# Regras específicas para arquivos Markdown
[*.md]
trim_trailing_whitespace = false
```
### Explicando cada regra:
- ``root = true`` → indica que esse é o arquivo principal (evita procurar outros ``.editorconfig`` em diretórios acima).
- ``charset = utf-8`` → garante que todos os arquivos usem UTF-8.
- ``indent_style = space`` → define que a indentação será feita com espaços (não com tab).
- ``indent_size = 2`` → cada nível de indentação terá 2 espaços (padrão em projetos JS/React).
- ``end_of_line = lf`` → define quebra de linha como ``LF`` (usado em Linux/Mac, mas o Git lida bem no Windows também).
- ``insert_final_newline = true`` → adiciona uma linha em branco no final de cada arquivo.
- ``trim_trailing_whitespace = true`` → remove espaços desnecessários no final das linhas.
- ``[*.md]`` → exceção para arquivos Markdown (não remove espaços no fim das linhas, porque eles podem mudar a formatação).

## ESLint
O ESLint é uma ferramenta que analisa seu código JavaScript/TypeScript em busca de problemas, más práticas e violações de estilo. No React, ele ajuda a manter um código limpo, padronizado e consistente, além de apontar erros antes mesmo da execução.

### Instalação do ESLint no React
No terminal, dentro do projeto:
1. instalar dependências: ``npm install --save-dev eslint``
2. Se for usar TypeScript junto: ``npm install --save-dev @typescript-eslint/parser@5 @typescript-eslint/eslint-plugin@5``
3. Instalar plugin para garantir o uso correto dos React Hooks: ``npm install --save-dev eslint-plugin-react-hooks``
4. Na raiz do projeto, crie ``.eslintrc.json`` (ou ``.eslintrc.js`` se preferir em JS).
5. Configure o arquivo ``.eslintrc.json``:
```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "react-hooks"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### Baixar extenção do ESLint no VS.
Caso já tenha, não é necessário seguir o passo a passo abaixo.
  1. Acessar a aba de extenções do VS
  2. Pesquisar por eslint
  3. Instalar a extenção ESLint - Microsoft

## Prettier
### Instalação do Prettier no React:
1. Intalar o formatador em si: ``npm install --save-dev --save-exact prettier``
2. Instalar plugin que permite rodar o Prettier como regra do ESLint: ``npm install --save-dev eslint-plugin-prettier``
3. Instalar plugin que desliga regras do ESLint que conflitam com o Prettier: ``npm install --save-dev eslint-config-prettier``

### Configuração do Prettier:
1. Crie um arquivo na raiz do projeto: ``.prettierrc``
2. Configure o arquivo ``.prettierrc``:
```
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80
}
```
Esse arquivo define regras de estilo: 
- ``trailingComma: "es5"`` → vírgula no final em arrays/objetos, se suportado. ``trailingComma: "none"`` → não precisa usar virgula
- ``semi: true`` → usa ponto e vírgula.
- ``singleQuote: true`` → usa aspas simples.
- ``tabWidth: 2`` → identação de 2 espaços.
- ``printWidth: 80`` → quebra de linha automática a cada 80 caracteres.

### Integração com ESLint
No ``.eslintrc.json``, adicione:
```
{
    "extends": [
        // ...
        "plugin:prettier/recommended"
    ],
    "plugins": [
        // ...
        "prettier"
    ],
    "rules": {
        // ...
        "prettier/prettier": "error"
    }
}
```
- ``"plugin:prettier/recommended"`` → ativa integração automática.
- ``"prettier/prettier": "error"`` → erros de formatação são mostrados no ESLint.

### Automatizar VS - Cofiguração de correção dos arquivos
1. Criar pasta ``.vscode`` na raiz do projeto
2. Criar arquivo de configuração ``settings.json``
3. Configurar arquivo ``settings.json``:
```
{
    "editor.formatOnSave": false, // Desabilita a formatação padrão do VS
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit" // Corrige toda a formação ao salvar o arquivo
    }
}
```
4. Comomando para automatizar as correções: ``npx prettier --write ./pasta``

## Extenção React do Google
### Instalar Extenção:
1. Abrir aba do navegador
2. Acessar o Chrome Web Store
3. Pesquisar por react
4. Instalar a extenção React Developer Tools - Facebook

### Utilizar Extenção:
A extenção habilita 2 opções de inspeção do React no inspetor de elementos ``Componentes`` e ``Profiler``.
1. Acessar o inspetor de elementos
2. Clicar na seta ``>>`` das opções de inspeção
3. As 2 opções vão ser as ultimas