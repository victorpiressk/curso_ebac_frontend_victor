## Plugin minifica JS
- Para minificar o JS é necessário acessar os plugins do gulp.
- Esse plugin também é um pacote do node
### Instalar minificador do JS
- **Passo 1:** Acessar pasta do projeto pelo terminal
- **Passo 2:** Instalar o plugin do Gulp minifica JS no projeto -> npm i --save-dev gulp-uglify
## Criar tarefa minifica JS
- **Passo 1:** Importar uglify para o arquivo gulpfile.js -> import uglify from "gulp-uglify";
- **Passo 2:** Programar a tarefa minificaJavaScript
````
function minificaJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}
````
- **Passo 3:** Exportar a tarela minifica JS
````
exports {minificaJavaScript}
````
- **Passo 4:** Criar pasta de scripts no source e no build
- **Passo 5:** Executar a tarela no terminal -> npm run gulp uglify