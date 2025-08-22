import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import sourcemaps from "gulp-sourcemaps"; // importação do plugin sourcemaps
import uglify from "gulp-uglify";
import obfuscate from "gulp-obfuscate";
import imagemin from "gulp-imagemin";

const sass = gulpSass(dartSass); // cria a instância correta do gulp-sass

function compilaSass() {
    return gulp.src('./source/styles/main.scss') // gulp.src busca os arquivos fonte
        .pipe(sourcemaps.init()) // inicia sourcemaps
        // .pipe() é o que permite encadear tarefas dentro de um fluxo
        .pipe(sass({
            style: 'compressed' // já minifica
        })) // sass() executa a compilação do sass (precisa ser uma função sem parametro, por isso a criação da instancia acima)
        .pipe(sourcemaps.write('./maps')) // grava sourcemaps na pasta desejada
        .pipe(gulp.dest('./build/styles')) // gulp.dest() indica onde os arquivos compilados serão depositados
}

function minificaJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate()) // Adiciona o comando de obfuscar no processo de minficação do JS
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagens() {
    return gulp.src('./source/images/*') // Adicionar apenas o * para o gulp analisar todos arquivos da pasta
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

function watch() {
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass))
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false}, gulp.series(minificaJavaScript))
    gulp.watch('./source/images/*',{ignoreInitial: false}, gulp.series(comprimeImagens))
}

export {compilaSass, watch, minificaJavaScript, comprimeImagens}