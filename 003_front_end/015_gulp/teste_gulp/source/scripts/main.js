// Função 1
function tarefaA(cb) {
    console.log("Executando Tarefa A...");
  cb(); // indica que terminou
}

// Função 2
function tarefaB(cb) {
    console.log("Executando Tarefa B...");
    cb();
}