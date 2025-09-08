## O que é TypeScript?
- O TypeScript (TS) é uma linguagem de programação criada pela Microsoft que é um superset do JavaScript.
- Isso significa que todo código JavaScript válido também é válido em TypeScript, mas o TS adiciona novos recursos.

## Principais características:

### 1. Tipagem estática opcional
- No JS, as variáveis podem mudar de tipo livremente.
- No TS, você pode declarar os tipos (string, number, boolean, etc.), o que ajuda a encontrar erros antes da execução.
```
let nome: string = "Victor"; 
nome = 123; // Erro detectado em tempo de compilação
```

### 2. Compilação para JavaScript
- O navegador não entende TypeScript diretamente.
- O TS precisa ser compilado para JavaScript normal.

### 3. Recursos modernos da linguagem
- Interfaces, enums, genéricos, decoradores e outros recursos que deixam o código mais organizado.

### 4. Produtividade e manutenção
- Ajuda em projetos grandes, pois melhora a legibilidade, escalabilidade e autocompletar em editores como VS Code.

### Em resumo:
- TypeScript é JavaScript com superpoderes de tipagem e organização, que facilita evitar erros e escrever códigos mais robustos.

## Configurar o TypeScript
- Instale o TypeScript de forma global: ``npm install --global typescript`
- Abra a pasta do projeto e inicie o pacote do node: ``npm init --yes``
- Instale o TypeScript no projeto: ``npm install --save-dev typescript``
- Verifique a instalação: ``npx tsc -v`` (Isso retorna a versão do TS) 

### Criar o arquivo de configuração tsconfig.json
- Esse arquivo define como o TypeScript será compilado para JavaScript.
- Crie com: ``npx tsc --init`` Isso gera um ``tsconfig.json`` básico.
- **OBS:** Caso não queira iniciar o pacote do node no projeto, o npx irá procurar a pasta do node do computador. Nesses casos, só é necessário instalar o TypeScript de forma global e executar o ``npx tsc --init`` que o arquivo de configuração será criado. 
- Exemplo de configuração recomendada para começar:
```
{
  "compilerOptions": {
    "target": "es6",               
    "module": "commonjs",          
    "rootDir": "./src",            
    "outDir": "./dist",            
    "strict": true,                
    "esModuleInterop": true,       
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  }
}
```
### Explicando as configurações principais:
- **target** → versão do JavaScript de saída (ex: ES6).
- **module** → sistema de módulos (Node usa ``commonjs``, browsers modernos usam ``esnext``).
- **rootDir** → onde ficam os arquivos ``.ts``.
- **outDir** → onde salvar os arquivos ``.js`` gerados.
- **strict** → ativa verificações mais rigorosas (boa prática).
- **esModuleInterop** → permite usar ``import`` e ``require`` juntos.

## Estrutura de pastas sugerida
```
projeto/
│── src/          # Arquivos TypeScript (.ts)
│    └── main.ts
│── dist/         # Arquivos compilados JS
│── tsconfig.json
│── package.json
```

## Compilar o código
- Compile todos os arquivos .ts com: ``npx tsc``
- Ou para compilar e assistir mudanças automaticamente: ``npx tsc --watch``

## Automatizar com script no package.json
### No package.json adicione:
```
"scripts": {
  "build": "tsc",
  "dev": "tsc --watch"
}
```
### Assim você pode rodar:
```
npm run build
npm run dev
```