## O que é o Babel JS?
- O Babel é um transpilador de JavaScript.
- Ele serve para converter código moderno (ES6+ e além) em uma versão mais antiga e compatível que funcione em todos os navegadores.

## O que o Babel faz?
- Transpila ES6+ → ES5 (para rodar em browsers antigos como IE11).
- Suporta novas features antes que os navegadores implementem.
- Trabalha junto com bundlers como Webpack, Parcel, Vite.
- Possui plugins e presets para personalizar a conversão (ex.: @babel/preset-env).

### Resumindo
- O Babel é como um “tradutor” de JavaScript moderno → garante que seu código funcione em qualquer ambiente, mesmo que o navegador não entenda os recursos mais novos.

## Configurando o Babel JS
### Criar um projeto Node:
1. Acessar a pasta do projeto pelo terminal.
2. Iniciar o pacote do node: ``npm init --yes``
3. Instalar os pacotes do babel: ``npm install --save-dev @babel/core @babel/cli @babel/preset-env``

### Criar estrutura de pastas:
```
meu-projeto/
 ├── package.json
 └── src/
     └── scripts
         └── main.js
```

### Configurar o babel no package.json:
1. Abrir arquivo package.json
2. Criar a seção de scripts (A seção não é criada automaticamente)
3. Adicionar script configuração de build
4. Adicionar configuração de browserslist após a seção de script (Orienta o babel a atender as listas de browzers)
```
"scripts": {
  "build": "babel src -d dist"
},
"browserslist": "> 0.25%",
```
### Criar o arquivo de configuração:
- Criar arquivo babel.config.json na raiz do projeto.
- Adicionar configuração de preset no arquivo:
```
{
  "presets": ["@babel/preset-env"]
}
```
- Esse preset garante que o Babel converta seu código de acordo com os navegadores/ambientes de destino.

### Criar o código para testar o babel:
```
const ola = function(nome) {
    console.log(`Olá, ${nome}!`);
}

ola("Victor");
```

### Executar build:
- Executar comando de build: ``npm run build``