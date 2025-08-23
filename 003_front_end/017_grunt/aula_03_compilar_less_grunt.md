## Como compilar o LESS com o Grunt

- O **Grunt** consegue compilar arquivos LESS para CSS usando um plugin específico.
- Esse processo automatiza a conversão, evitando que você faça isso manualmente.

### Instalação do plugin LESS
- **Passo 1:** Abrir o terminal no projeto.
- **Passo 2:** Instalar o plugin `grunt-contrib-less`:
```
npm i --save-dev grunt-contrib-less
```
## Configuração no Gruntfile.js
### Estrutura básica para compilar LESS:
```
module.exports = function(grunt) {
    // Configuração das tarefas
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {  // Ambiente de desenvolvimento
                options: {
                    compress: false, // sem minificação
                },
                files: {
                    "build/styles/main.css": "source/styles/main.less"
                }
            },
            production: {  // Ambiente de produção
                options: {
                    compress: true, // minificado
                },
                files: {
                    "build/styles/main.min.css": "source/styles/main.less"
                }
            }
        }
    });

    // Carregar o plugin LESS
    grunt.loadNpmTasks('grunt-contrib-less');

    // Registrar a tarefa padrão
    grunt.registerTask('default', ['less:development']);
};
```
## Explicando a configuração
- less: {} → objeto com configurações do compilador.
- development → modo usado durante o desenvolvimento (sem minificação).
- production → modo usado para gerar versão final (CSS minificado).
- files: { "destino": "origem" }
- destino → arquivo CSS de saída.
- origem → arquivo LESS de entrada.

## Executar a compilação
- Para rodar em desenvolvimento:
```
npm run grunt
```
- Para rodar em produção:
```
grunt less:production
```
