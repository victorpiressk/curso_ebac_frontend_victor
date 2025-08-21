## Plugins compila SASS
- Para poder criar as tarefas que execute a compilação do sass é necessário acessar os plugins do gulp.
- Esses plugins também são pacotes node
### Para instalar
- **Passo 1:** Acessar pasta do projeto pelo terminal
- **Passo 2:** Instalar o plugin do Gulp compila SASS no projeto -> npm i --save-dev gulp-sass
- **Passo 3:** Também instale o pacote do SASS caso não tenha instalado -> npm i --save-dev sass
## Criar tarela compila SASS
- **Passo 1:** Importar gulp para o arquivo gulpfile.js -> import gulp from "gulp";
- **Passo 2:** Importar plugins compila sass para o arquivo gulpfile.js -> import gulpSass from "gulp-sass";
- **Passo 3:** Importar uma extenção sass do compila sass para o arquivo gulpfile.js -> import * as dartSass from "sass"; 
- **Passo 4:** Programar a tarefa compilaSass
````
const sass = gulpSass(dartSass); // cria a instância correta do gulp-sass

export function compilaSass() {
    return gulp.src('./source/styles/*.scss') // gulp.src busca os arquivos fonte
        // .pipe() é o que permite encadear tarefas dentro de um fluxo
        .pipe(sass()) // sass() executa a compilação do sass (precisa ser uma função sem parametro, por isso a criação da instancia acima)
        .pipe(gulp.dest('./build/styles')) // gulp.dest() indica onde os arquivos compilados serão depositados
}

export default compilaSass // ou export {compilaSass}
````
- **Passo 5:** Criar estrutura de pastas
````
meu-projeto/
 ├── gulpfile.js
 ├── package.json
 └── src/
     └── styles
         └── main.scss
 └── build/
     └── styles
````
- **Passo 6:** Executar a tarela compila sass -> npm run gulp ou npm run gulp compilaSass
- **OBS:** O arquivo de variaveis não tem regras CSS, então pode criar um arquivo vazio na hora da compilação. Para corrgir, é possível adicionar o arquivo em outra pasta ou alterar o caminho do gulp.src para não buscar todos arquivos .scss, apenas um arquivo especifico como main.scss
## Minifica SASS
- Existem 2 opções para minificar o SASS
### Minificação direto no compilador Sass (outputStyle: "compressed")
- Essa é a forma nativa.
- Não precisa instalar nada além do gulp-sass.
- Simples e funciona bem.
````
import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";

const sass = gulpSass(dartSass);

function compilaSass() {
  return gulp.src("./source/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" })) // já minifica
    .pipe(gulp.dest("./build/styles"));
}

export default compilaSass;
````
- **OBS:** Dependendo da versão dos plugins instalados, o parametro outputStyle pode não funcionar, nesses casos é possível utilizar o parametro style ou a minificação por plugin.
### Minificação com plugin gulp-clean-css
- Essa é uma forma mais flexível e poderosa, porque além de minificar, o clean-css permite otimizações extras (ex.: remover CSS duplicado, encurtar hexadecimais, compatibilidade com navegadores antigos etc).
- Aqui você compila o Sass normalmente e depois passa o resultado no clean-css.
#### Instalação:
- **Passo 1:** Instalar o plugin do Gulp minifica SASS no projeto -> npm install gulp-clean-css --save-dev
- **Passo 2:**
````
import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import cleanCSS from "gulp-clean-css";

const sass = gulpSass(dartSass);

function compilaSass() {
  return gulp.src("./source/styles/*.scss")
    .pipe(sass()) // compila Sass → CSS normal
    .pipe(cleanCSS({ level: 2 })) // minifica com otimizações
    .pipe(gulp.dest("./build/styles"));
}

export default compilaSass;
````
### Diferença prática entre as duas:
- outputStyle: "compressed" → só tira espaços/brancos.
- cleanCSS → além de minificar, pode fazer ajustes de performance no CSS.
## Plugin source maps
- Este plugin ajuda ao navegador a identificar qual arquivo fonte a regra css está
- **Passo 1:** Instalar o plugin do Gulp source maps no projeto -> npm install --save-dev gulp-sourcemaps 
- **Passo 2:** Importar o plugin gulp-sourcemaps para o arquivo gulpfile.js -> import sourcemaps from "gulp-sourcemaps";
- **Passo 3:**
````
import gulp from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import sourcemaps from "gulp-sourcemaps"; // importação do plugin sourcemaps

const sass = gulpSass(dartSass)

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init()) // inicia sourcemaps
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps')) // grava sourcemaps na pasta desejada
        .pipe(gulp.dest('./build/styles'))
}

export {compilaSass}
````
### Detalhes importantes:
- sourcemaps.init() → diz ao Gulp para começar a mapear os arquivos originais.
- sourcemaps.write('.') → grava o .map na mesma pasta de destino.
- Você pode trocar "." por "../maps" ou outro caminho se quiser separar os arquivos de mapa.
- No DevTools do navegador, ao inspecionar o CSS, você vai conseguir ver o .scss original.
## Ativar o watch no gulp
- **Passo 1:** Criar a tarefa watch no arquivo gulpfile.js
````
function watch() {
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass))
}
````
    - Primeiro argumento -> Informar o caminho que deve ser analisado pelo watch
    - Segundo arguemento -> Retirar comportamento padrão de ignorar a primeira execução do watch
    - Terceiro argumento -> Adicionar tarefas a serem executadas em serie durante a analise do watch
- **Passo 2:** Adicionar a tarefa no exports
````
export {compilaSass, watch}
````
- **Passo 3:** Executar a tarela watch -> npm run gulp watch