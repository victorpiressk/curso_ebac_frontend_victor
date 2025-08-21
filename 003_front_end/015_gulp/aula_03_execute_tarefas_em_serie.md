## Execute tarefas em serie no gulp
- No Gulp (com ES Modules), você cria uma tarefa em serie usando o método gulp.series().
- Isso faz com que as funções rodem uma depois da outra.
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
## Rodar as tarefas em serie
````
export const tarefasEmSerie = gulp.series(tarefaA, tarefaB);
````
## Como executar no terminal:
- Excutar comando -> gulp tarefasEmSerie
### Resultado esperado:
#### As duas mensagens aparecerão quase ao mesmo tempo:
- Executando Tarefa A...
- Tarefa A finalizada...
- Executando Tarefa B...
- Tarefa B finalizada...