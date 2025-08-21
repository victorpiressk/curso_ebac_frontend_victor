import gulp from "gulp";

function funcaoPadrao(cb) {
    console.log('Executando via gulp')
    cb()
}

function dizOi(cb) {
    console.log('Olá Gulp')
    dizTchau()
    cb()
}

function dizTchau() {
    console.log('Tchau Gulp')
}

function tarefaA(cb) {
    console.log('Executando Tarefa A...')
    cb()
}

function tarefaB(cb) {
    console.log("Executando Tarefa B...");
    cb();
}

// Executando tarefas em serie (Tarefa default -> Comando terminal -> npm run gulp)
export default gulp.series(funcaoPadrao, dizOi)

// Executando tarefas em paralelo (Tarefa nomeada -> Comando terminal -> gulp tarefasParalelas)
export const tarelasParalelas = gulp.parallel(tarefaA, tarefaB)