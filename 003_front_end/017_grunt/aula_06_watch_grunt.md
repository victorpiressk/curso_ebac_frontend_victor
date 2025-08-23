## Como criar o `watch` com Grunt

- O **watch** permite que o Grunt observe alterações em arquivos e execute tarefas automaticamente sempre que algo for alterado.

---

### 1. Instalação do plugin
#### No terminal do projeto:
```
npm i --save-dev grunt-contrib-watch 
```

### 2. Configuração no Gruntfile.js
#### Exemplo de configuração básica:
```
module.exports = function(grunt) {

  // Configuração das tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Task de Sass
    sass: {
      development: {
        options: { style: 'expanded' },
        files: {
          'build/styles/main.css': 'source/styles/main.scss'
        }
      }
    },

    // Task Watch
    watch: {
      styles: {
        files: ['source/styles/**/*.scss'], // arquivos que serão observados
        tasks: ['sass:development'],       // task que será executada quando houver mudanças
        options: {
          spawn: false,
          atBegin: true                     // executa a task imediatamente ao iniciar o watch
        }
      }
    }
  });

  // Carregar plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Task padrão
  grunt.registerTask('default', ['watch']);
};
```

### 3. Explicando a configuração
- files → arquivos ou pastas que o watch deve monitorar.
- tasks → tarefas que serão executadas quando esses arquivos mudarem.
- spawn: false → melhora a performance do watch.
- atBegin: true → executa a task imediatamente quando o watch inicia, sem precisar salvar o arquivo.

### 4. Executar o watch
#### No terminal, basta rodar:
```
npm run grunt
```
- O Grunt vai ficar observando os arquivos e compilando o Sass automaticamente sempre que houver alterações.

## Resumo:
- O plugin grunt-contrib-watch deixa o desenvolvimento mais ágil.
- Você pode adicionar várias seções dentro do watch para observar JS, imagens ou HTML também.
- Funciona muito bem em conjunto com tasks paralelas (concurrent) para builds automáticos completos.