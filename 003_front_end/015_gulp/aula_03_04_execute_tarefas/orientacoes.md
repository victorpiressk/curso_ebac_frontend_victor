- O Gulp começou sendo feito com CommonJS (require e module.exports).
- Mas como o Node.js hoje já suporta ES Modules (ESM), dá para escrever o gulpfile no formato moderno com import/export.



## Configuração inicial

### Se ainda não tem o projeto:

    - mkdir meu-projeto-gulp
    - cd meu-projeto-gulp
    - npm init -y
    - npm install --save-dev gulp


### No package.json, adicione:

````
{
    "type": "module"
}
````
- Isso diz ao Node que o projeto usa ES Modules.

### Estrutura de arquivos
````
meu-projeto-gulp/
 ├── gulpfile.js
 ├── package.json
 └── src/
     └── index.html
````

## Gulp com ES Modules

### Criando tarefas

📂 gulpfile.js
````
import gulp from "gulp";

// Tarefa simples
export function ola(cb) {
  console.log("👋 Olá, essa é minha primeira tarefa com ES Modules no Gulp!");
  cb(); // callback para avisar que terminou
}

// Tarefa de copiar arquivos
export function copiar() {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"));
}

// Tarefa de observar mudanças
export function observar() {
  gulp.watch("src/*.html", copiar);
}

// Tarefa padrão (roda com `gulp`)
export default gulp.series(ola, copiar);
````

### Executando as tarefas

#### No terminal:

- Roda a tarefa ola: gulp ola
- Roda a tarefa copiar: gulp copiar
- Roda a tarefa padrão: gulp
- Fica observando alterações: gulp observar

## Diferenças principais (ESM no Gulp)

- Em vez de **const gulp = require("gulp")**, usamos: **import gulp from "gulp";**
- Em vez de **exports.minhaTarefa = ...**, usamos: **export function minhaTarefa() { ... }**
- Para tarefa padrão, usamos **export default**.

## Resumo rápido:

- export function nome() → cria uma tarefa nomeada.
- export default → define a tarefa padrão que roda só com gulp.
- gulp.series() → executa as tarefas em sequência.
- gulp.parallel() → executa várias tarefas ao mesmo tempo.