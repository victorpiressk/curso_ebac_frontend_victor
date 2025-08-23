## Tarefas paralelas
- No Grunt, para executar tarefas paralelas, você precisa usar um plugin chamado grunt-concurrent.

## Como executar tarefas paralelas com Grunt
### 1. Instalar o plugin
- No terminal, dentro do seu projeto:
```
npm i --save-dev grunt-concurrent 
```
### 2. Configuração no Gruntfile.js
- Você deve carregar o plugin e criar uma configuração para ele.
#### Exemplo:
````
module.exports = function(grunt) {

  // Configuração das tasks
  grunt.initConfig({
    // Exemplo: compilação de Sass
    sass: {
      dist: {
        options: { style: 'compressed' },
        files: {
          'build/styles/main.min.css': 'source/styles/main.scss'
        }
      }
    },

    // Exemplo: minificação de JS
    uglify: {
      dist: {
        files: {
          'build/scripts/main.min.js': ['source/scripts/*.js']
        }
      }
    },

    // Configuração do concurrent (execução paralela)
    concurrent: {
      target: ['sass', 'uglify'], // as tasks que vão rodar juntas
      options: {
        logConcurrentOutput: true
      }
    }
  });

  // Carregar plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concurrent');

  // Registrar a task default
  grunt.registerTask('default', ['concurrent:target']);
};
````
### 3. Executar no terminal
```
npm run grunt
```
- Isso irá rodar Sass e Uglify ao mesmo tempo.

## Vantagens de usar concurrent
- Acelera o processo de build (tarefas rodam em paralelo).
- Muito útil em projetos grandes (Sass + Babel + Imagemin, etc).
- Permite melhorar a performance sem alterar a lógica das tasks.

## Resumo:
- Use o plugin grunt-concurrent.
- Configure as tasks que deseja rodar em paralelo.
- Chame grunt concurrent:target (ou deixe como default) para executar.

## Diferenças na configuração do `grunt-concurrent`

### 1. Sem a propriedade `options`
- No Grunt, a seção `options` dentro de uma task (`concurrent`, `sass`, etc.) **é opcional**.
- Ela serve apenas para configurar comportamentos adicionais, como:
  - `logConcurrentOutput: true` → exibe o log de todas as tasks paralelas no terminal.
- Ou seja, você pode ter algo assim:
```
concurrent: {
  target: ['sass', 'uglify']
}
```
- Funciona normalmente, mas não mostrará os logs detalhados das tasks em paralelo.

### 2. Sem :target ao registrar a task default
#### No exemplo clássico:
``grunt.registerTask('default', ['concurrent']);``
- O Grunt entende que você quer rodar o target padrão definido dentro da task concurrent.

#### No exemplo mais completo:

``grunt.registerTask('default', ['concurrent:target']);``
- Isso deixa explícito qual target da task concurrent será executado.
- Ambos funcionam, mas adicionar o :target é mais explícito e recomendável para projetos maiores com múltiplos targets.

## Resumo das diferenças
- options → opcional, só necessário se você quiser customizar comportamento.
- :target → também opcional se você quer rodar o target padrão, mas recomendável para deixar claro qual está sendo executado.
- Em projetos pequenos, você pode seguir o exemplo sem :target.
- Em projetos maiores, usar options e :target ajuda a organizar e debugar as tasks.