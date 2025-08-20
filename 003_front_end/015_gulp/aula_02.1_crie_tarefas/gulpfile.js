// Tarefas publicas
export function funcaoPadrao() {
    console.log('Executando via gulp')
}

export function dizOi() {
    console.log('Olá Gulp')
    dizTchau()
}

// Tarefa privada
function dizTchau() {
    console.log('Tchau Gulp')
}

funcaoPadrao()
dizOi()