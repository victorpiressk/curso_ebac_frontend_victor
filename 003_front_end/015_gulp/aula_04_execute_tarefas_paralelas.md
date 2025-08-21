## Execute tarefas em paralelo no gulp
- No Gulp (com ES Modules), você cria uma tarefa paralela usando o método gulp.parallel().
- Isso faz com que várias funções rodem ao mesmo tempo, em vez de uma depois da outra.
## Criação das funções
````
import gulp from "gulp";

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
````
## Rodar as tarefas em paralelo
````
export const tarefasParalelas = gulp.parallel(tarefaA, tarefaB);
````
## Como executar no terminal:
- Excutar comando -> gulp tarefasParalelas
### Resultado esperado:
#### As duas mensagens aparecerão quase ao mesmo tempo:
- Executando Tarefa A...
- Executando Tarefa B...