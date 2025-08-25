## Como comprimir (minificar) JavaScript com Grunt
- Para minificar/comprimir arquivos JavaScript no Grunt, usamos o plugin grunt-contrib-uglify.
- Ele pega os arquivos .js originais, remove espaços, comentários e reduz os nomes das variáveis (quando possível), gerando uma versão otimizada e menor.

## Instalação do plugin
```
npm install --save-dev grunt-contrib-uglify
```

## Configuração no Gruntfile.js
```
module.exports = function(grunt) {
  // Configuração do projeto
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        files: {
          'dist/js/main.min.js': ['source/js/*.js'] 
        }
      }
    }
  });

  // Carregar plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Registrar tarefa padrão
  grunt.registerTask('default', ['uglify']);
};
```

## Explicando a configuração
- uglify: nome da task do plugin.
- build: target (você pode ter vários alvos diferentes, ex.: development, production).
- files: define os arquivos de saída e entrada.
    - 'dist/js/main.min.js' → arquivo de saída minificado.
    - ['source/js/*.js'] → arquivos de entrada que serão comprimidos.

## Executando a compressão
```
npm run grunt
```
- Ao rodar o comando acima, o Grunt vai procurar pelos arquivos .js dentro de source/js/, minificá-los e gerar dist/js/main.min.js.