## Plugin obfuscar JS
- Esse plugin serve para deixar os arquivos JS ilegiveis para outros desenvolvedores
- Para obfuscar o JS é necessário acessar os plugins do gulp.
### Instalar obfuscador do JS
- **Passo 1:** Acessar pasta do projeto pelo terminal
- **Passo 2:** Instalar o plugin do Gulp obfuscate JS no projeto -> npm i --save-dev gulp-obfuscate
## Criar tarefa obfuscar JS
- **Passo 1:** Importar uglify para o arquivo gulpfile.js -> import obfuscate from "gulp-obfuscate";
- **Passo 2:**
````
function minificaJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate()) // Adiciona o comando de obfuscar no processo de minficação do JS
        .pipe(gulp.dest('./build/scripts'))
}
````