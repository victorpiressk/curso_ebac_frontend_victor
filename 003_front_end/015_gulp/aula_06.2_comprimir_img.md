## Plugin compressão de imagens
- Esse plugin realiza a compressão de imagens pelo gulp
- Para comprimeir imagens pelo gulp é necessário acessar os plugins do gulp.
### Instalar plugin de compressão de imagens
- **Passo 1:** Acessar pasta do projeto pelo terminal
- **Passo 2:** Instalar o plugin de compressão de imagens no projeto -> npm i --save-dev gulp-imagemin
## Criar tarefa de compressão de imagens
- **Passo 1:** Importar imagemin para o arquivo gulpfile.js -> import imagemin from "gulp-imagemin";
- **Passo 2:**
````
function comprimeImagens() {
    return gulp.src('./source/images/*') // Adicionar apenas o * para o gulp analisar todos arquivos da pasta
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}
````
- **Passo 3:** Exportar a tarela comprimeImagens
````
exports {comprimeImagens}
````
- **Passo 4:** Criar pasta de imagens no source e no build
- **Passo 5:** Executar a tarela no terminal -> npm run gulp imagemin
- **OBS:** Dependendo a versão do plugin, pode aparecer um erro na execução da tarefa, então deve instalar uma versão mais antiga -> npm i --save-dev gulp-imagemin@7.1.0