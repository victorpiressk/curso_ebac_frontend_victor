import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import htmlmin from "gulp-htmlmin";

const sass = gulpSass(dartSass); // cria a instância correta do gulp-sass

function compilaSass() {
    return gulp.src('./src/styles/*.scss') // gulp.src busca os arquivos fonte
        // .pipe() é o que permite encadear tarefas dentro de um fluxo
        .pipe(sass({
            style: 'compressed'
        })) // sass() executa a compilação do sass (precisa ser uma função sem parametro, por isso a criação da instancia acima)
        .pipe(gulp.dest('./dist/styles')) // gulp.dest() indica onde os arquivos compilados serão depositados
}

function minifyHTML() {
  return gulp.src("./src/*.html") // pega todos os .html da pasta src
    .pipe(htmlmin({
      collapseWhitespace: true, // remove espaços e quebras de linha
      removeComments: true      // remove comentários
    }))
    .pipe(gulp.dest("./dist")); // envia para pasta dist
}

function watch() {
    gulp.watch('./src/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./src/*.html',{ignoreInitial: false}, gulp.series(minifyHTML))
}

export {compilaSass, minifyHTML, watch}