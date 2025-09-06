## Programação assíncrona
- O JavaScript, tanto no navegador quanto no Node.js, é essencialmente single-threaded. Isso significa que existe apenas uma thread responsável por executar o código JavaScript. Assim, as instruções são processadas de forma sequencial (em ordem), e cada operação precisa terminar antes que a próxima seja iniciada.
- A programação assíncrona permite que seu programa inicie operações sem bloquear o fluxo principal. Em vez de “esperar” que a operação termine, são usadas técnicas assíncronas, como callbacks, Promises ou async/await, que delegam certas tarefas ao ambiente e liberam a thread principal para continuar executando o restante do código.

## Promises
- Uma Promise é um objeto que representa uma operação assíncrona. Ela pode ser resolvida (quando a operação tem sucesso, retornando um resultado) ou rejeitada (quando ocorre um erro, retornando a falha).

### Criação:
```
const novaPromise = new Promise(function(resolve, reject) {
    try {
        let execucao = 0
        for (let i = 0; i < 10000000000; i++) {
            execucao++
        }
        resolve(execucao)
    } catch(erro) {
        reject('Ocorreu o erro: ', erro)
    }
});
```
### Uso:
```
console.log(inicio)

novaPromise.then(function(resultado) {
  console.log(resultado);
}).catch(function(erro){
  console.log(erro);
})

console.log(fim)
```
- Os logs de inicio e fim são executados em paralelo a Promise.

## Promises com parametro
```
const promiseComParamtro = (login, senha) => {
    return new Promise((resolve, reject) => {
        try {
            resolve('logado com sucesso')
        } catch(e) {
            reject('Erro ao tentar fazer login')
        }
    })
}
```

## async / await
- ``async`` transforma uma função em uma função assíncrona, fazendo com que ela retorne sempre uma Promise.
- ``await`` é usado dentro de funções ``async`` para “pausar” a execução até que a Promise seja resolvida ou rejeitada — mas sem bloquear a thread principal.

### Exemplo:
```
async function execucaoPrincipal() {
    console.log(inicio)

    promiseComParamtro('vicor@gmail.com', 123456).then(resultado => {
        console.log(resultado)
    }).catch(erro => {
        console.log(erro)
    })

    try {
        const resultado = await novaPromise
        console.log(resultado)
    } catch(e) {
        console.log(e)
    }

    console.log(fim)

}

execucaoPrincipal()
```
- Com o ``await`` o log de fim precisa aguradar a execução da Promise finalizar para ser exibido.
- A promise com paramtros será executada em paralelo e seu resultado pode ser exibido após o log de fim, sem interferir na execução. 