## Minificar HTML com gulp
- O Gulp pode minificar arquivos **HTML** utilizando plugins extras, como **`gulp-htmlmin`**.  
- O próprio Gulp é só um **orquestrador de tarefas** — para minificação, ele precisa de plugins específicos.

## Como instalar o plugin
### No terminal, rode:
```
npm install --save-dev gulp-htmlmin
```

### Exemplo de uso no gulpfile.js
#### Versão ES Modules (import)
```
import gulp from "gulp";
import htmlmin from "gulp-htmlmin";

function minifyHTML() {
  return gulp.src("./src/**/*.html") // pega todos os .html da pasta src
    .pipe(htmlmin({
      collapseWhitespace: true, // remove espaços e quebras de linha
      removeComments: true      // remove comentários
    }))
    .pipe(gulp.dest("./dist")); // envia para pasta dist
}

export default minifyHTML;
```

#### Versão CommonJS (require)
```
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

function minifyHTML() {
  return gulp.src("./src/**/*.html")
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest("./dist"));
}

exports.default = minifyHTML;
```

## O que dá para configurar?
### O gulp-htmlmin tem várias opções, as mais usadas são:
- collapseWhitespace: true → remove espaços e quebras de linha.
- removeComments: true → remove comentários <!-- -->.
- minifyCSS: true → minifica CSS embutido dentro do HTML.
- minifyJS: true → minifica JS embutido dentro do HTML.
- removeEmptyAttributes: true → remove atributos vazios (class="").

## Fluxo recomendado
- Criar uma pasta src/ para seu HTML original.
- Criar uma pasta dist/ onde o Gulp salva os arquivos minificados.

## Rodar no terminal:
```
npm run gulp
```
- (se tiver configurado "gulp": "gulp" no package.json).