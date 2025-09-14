# Criar um projeto com Create React App
1. Verifique os requisitos: ``node -v   # recomendo Node 16+ (ou 18+)`` e ``npm -v``
2. Rode o comando: ``npx create-react-app meu-projeto``
    - Variante → TypeScript ``npx create-react-app meu-app --template typescript``
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

### Instalação do ESLint no React:
- No terminal, dentro do seu projeto React, rode: ``npx eslint --init``
- Ele vai abrir um wizard interativo com perguntas como:
  1. Como você deseja usar o ESLint?
      - Apenas verificar problemas de sintaxe.
      - Verificar sintaxe e encontrar problemas. **<-- utilizar essa opção quando usar o Prettier para impor um estilo de código**
      - Verificar sintaxe, encontrar problemas e impor um estilo de código (essa é a mais usada).
  2. Que tipo de módulos seu projeto usa?
      - JavaScript modules (import/export). **<-- utilizar essa opção**
      - CommonJS (require/exports).
      - Nenhum.
  3. Que framework você está usando?
      - React. **<-- utilizar essa opção**
      - Vue.js.
      - Nenhum.
  4. Seu projeto usa TypeScript?
      - Sim / Não. **<-- utilizar sim para projetos com TypeScript**
  5. Onde o código vai rodar?
      - Browser. **<-- utilizar essa opção para projetos front-end**
      - Node.
      - Ambos.
  6. Como você quer que o ESLint salve a configuração?
      - JavaScript ``.eslintrc.js``.
      - YAML.
      - JSON ``.eslintrc.json``. **<-- utilizar essa opção**
  7. Deseja instalar as dependências agora?
      - Sim (ele já instala tudo que precisa). **<-- utilizar essa opção**
      - Não (você instala manualmente depois).
  8. Qual gerenciador de pacotes você deseja usar?
      - npm **<-- utilizar essa opção**
      - yarn
      - pnpm

Depois de rodar, ele gera automaticamente um arquivo ``.eslintrc.json`` ou ``.eslintrc.js`` com base nas suas respostas.
- Exemplo de configuração basica:
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
  "parse": "@typescript-eslint/parse",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {}
}
```

### Personalizar as regras:
```
"rules": {
    "react/react-in-jsx-scope": "off", 
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
```

### Regra adicional recomendada para React:   
1. Instalar plugin para garantir o uso correto dos React Hooks: ``npm install --save-dev eslint-plugin-react-hooks``
2. Configuração no arquivo ``.eslintrc.json``:
```
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

### Adicionar propriedade para detectar versão do react:
Deve ser adicionada abaixo de ``"rules": {},``
```
{
  "plugins": [
  ],
  "rules": {
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
1. O formatador em si: ``npm install --save-dev --save-exact prettier``
2. Permite rodar o Prettier como regra do ESLint: ``npm install --save-dev eslint-plugin-prettier``
3. Desliga regras do ESLint que conflitam com o Prettier: ``npm install --save-dev eslint-config-prettier``

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
        "source.fixAll.eslint": true // Corrige toda a formação ao salvar o arquivo
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