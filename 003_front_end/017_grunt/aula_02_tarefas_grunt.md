## O que é a tarefa padrão do Grunt?
- A tarefa padrão é a tarefa que o Grunt executa quando você roda apenas o comando:
```
npm run grunt
```
- Ela é definida no Gruntfile.js com:
```
grunt.registerTask('default', ['nome-da-tarefa']);
```
### Exemplo de tarefa padrão
```
module.exports = function(grunt) {
    // Configuração
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    // Exemplo de uma tarefa simples
    grunt.registerTask('hello', function() {
        console.log("Olá, estou rodando com o Grunt!");
    });

    // Definição da tarefa padrão
    grunt.registerTask('default', ['hello']);
};
```
- Agora, ao digitar no terminal:
```
npm run grunt
```
- O Grunt irá rodar automaticamente a tarefa hello.

### Detalhes importantes:
- O segundo argumento da tarefa padrão é um array
- É possível adicionar mais de uma tarefa na tarefa padrão, já que o segundo argumento se trata de um array
- Ao realizar o comando grunt no terminal, irá executar todas as tarefas adicionadas na tarefa padrão