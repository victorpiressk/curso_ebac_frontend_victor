## Como comprimir HTML com Grunt
- Para comprimir (minificar) arquivos **HTML**, usamos o plugin **`grunt-contrib-htmlmin`**.  
- Esse plugin remove espaços em branco, comentários e otimiza o HTML para produção.

### 1. Instalação do plugin
#### No terminal do projeto:
```
npm i --save-dev grunt-contrib-htmlmin 
```

### 2. Configuração no Gruntfile.js
#### Exemplo de configuração básica para minificar HTML:
```
module.exports = function(grunt) {

  // Configuração das tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Task HTMLMin
    htmlmin: {
      dist: { // target de produção
        options: {
          removeComments: true,   // remove comentários
          collapseWhitespace: true // remove espaços em branco
        },
        files: {
          'build/index.html': 'source/index.html' // destino : origem
        }
      }
    }
  });

  // Carregar plugin
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Task padrão
  grunt.registerTask('default', ['htmlmin']);
};
```

### 3. Explicando a configuração
- removeComments: true → remove todos os comentários HTML.
- collapseWhitespace: true → remove espaços extras e quebras de linha.
- files → define os arquivos de origem e destino (build/index.html será o HTML comprimido).

### 4. Executar a task
#### No terminal, basta rodar:
```
npm run grunt
```
- Isso irá gerar uma versão minificada do seu arquivo HTML dentro da pasta build/.

### Resumo:
- O grunt-contrib-htmlmin é o plugin oficial para minificação de HTML.
- Com ele você deixa os arquivos mais leves e otimizados para produção.
- Pode ser integrado com outras tasks (como CSS e JS) em um fluxo completo de build.

## Por que usar uma pasta temporária antes da minificação do HTML?

Quando usamos **Grunt** com tarefas como `grunt-replace` + `grunt-contrib-htmlmin`,  
o professor pediu para criar uma **pasta temporária** (`temp/` ou `tmp/`) antes de mandar o resultado para `dist/`.

## Substituição de valores HTML + Minificação do HTML

### 1. **Ordem das tarefas**  
- Primeiro precisamos **substituir valores dinâmicos** no HTML (ex.: `@@versao`, `@@caminho`, etc.) com o `grunt-replace`.  
- Depois, pegamos esse HTML já processado e o enviamos para o `htmlmin` fazer a minificação.

#### Se você mandar o `replace` **e o `htmlmin` atuarem no mesmo arquivo na mesma pasta (`dist/`)**, pode acontecer:
- O `htmlmin` ser executado **antes do replace**, quebrando as substituições.
- Ou o `replace` sobrescrever o arquivo minificado, gerando HTML sem compressão.

### 2. **Separação de responsabilidades**  
- `temp/` → armazena o HTML processado pelo `replace`, mas ainda legível.  
- `dist/` → armazena apenas o resultado **final e minificado**.  

#### Isso deixa o fluxo mais **organizado e previsível**.

### 3. **Evita conflito de arquivos**  
- Se você escrever e reescrever no mesmo arquivo durante diferentes etapas, pode gerar arquivos inconsistentes.  
- A pasta temporária funciona como uma **etapa intermediária segura**.

### Exemplo prático no fluxo

```
grunt.initConfig({
    replace: {
        dist: {
            options: {
                patterns: [
                    {
                        match: 'valor_inicial',
                        replacement: 'valor_final'
                    }
                ] 
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    src: ['source/index.html'],
                    dest: 'temp/'
                }
            ]
        }
    },

    htmlmin: {
        dist: {
            options: {
                collapseWhitespace: true,
                removeComments: true
            },
            files: [
                {
                    dist/index.html : temp/index.html
                }
            ]
        }
    }
});
```
## Resumindo
- Pasta temporária (temp/) = evita conflito, garante ordem, organiza fluxo.
- dist/ = só recebe o produto final pronto e minificado.
- Se você tentar pular o temp/, pode até funcionar em casos simples, mas em projetos maiores os riscos de conflito aumentam muito.

## O que é o `grunt-contrib-clean`?
- O **`grunt-contrib-clean`** é um plugin do Grunt usado para **excluir arquivos ou pastas** do projeto.
- Ele é muito útil quando você gera arquivos temporários (como `temp/`, `dist/` ou `build/`) e precisa **limpar** antes de gerar uma nova versão do projeto.

### Para que serve?
- Evitar acúmulo de arquivos antigos.
- Garantir que a pasta de distribuição (`dist/`) sempre receba **apenas os arquivos atualizados**.
- Limpar pastas temporárias usadas em processos como minificação e replace.

### Instalação grunt clean
```
npm i --save-dev grunt-contrib-clean 
```
### Configuração no Gruntfile.js
```
module.exports = function (grunt) {
  // Configuração
  grunt.initConfig({
    clean: {
      build: ['dist'],       // Remove a pasta dist
      temp: ['temp'],        // Remove a pasta temp
      all: ['dist', 'temp']  // Remove várias pastas
    }
  });

  // Carrega o plugin
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Tarefa padrão
  grunt.registerTask('default', ['clean:all']);
};
```
## Como usar
- grunt clean:build → apaga apenas a pasta dist/.
- grunt clean:temp → apaga apenas a pasta temp/.
- grunt clean:all → apaga dist/ e temp/.
- grunt clean → se rodar sem :target, o Grunt vai executar todos os itens configurados no clean.

### Em resumo:
- o grunt-contrib-clean é como o faxineiro do seu projeto, apagando pastas antigas ou temporárias para manter tudo organizado e atualizado.