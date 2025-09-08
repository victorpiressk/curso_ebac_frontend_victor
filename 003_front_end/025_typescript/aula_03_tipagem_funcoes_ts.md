## Tipagem em Funções no TypeScript
- No TypeScript, você pode definir os tipos dos parâmetros e o tipo de retorno de uma função. Isso ajuda a evitar erros e deixa o código mais previsível.

### 1. Função com parâmetros tipados
```
function soma(a: number, b: number): number {
  return a + b;
}

console.log(soma(10, 5)); // 15
```
- ``a: number`` → parâmetro a deve ser número.
- ``b: number`` → parâmetro b deve ser número.
- ``: number`` após os parênteses → a função deve retornar um número.
- Se tentar passar string, por exemplo, o TypeScript acusa erro.

### 2. Função sem retorno (void)
```
function logMensagem(mensagem: string): void {
  console.log(mensagem);
}

logMensagem("Executando...");
```
- O void indica que a função não retorna nada.

### 3. Função com retorno condicional (string | number)
```
function resultado(ok: boolean): string | number {
  return ok ? "Sucesso" : 0;
}
```
- O retorno pode ser string ou number. Isso é chamado de Union Type.