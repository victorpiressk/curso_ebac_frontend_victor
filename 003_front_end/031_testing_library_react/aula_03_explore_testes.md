## Funções, Métodos e Atributos do Jest + React Testing Library
### Principais Funções do Jest
- **describe** → agrupa testes relacionados.
- **it ou test** → define um caso de teste.
- **expect** → cria uma asserção (o que esperamos que aconteça).

Exemplo:
```
describe("Exemplo simples", () => {
  it("soma dois números", () => {
    expect(2 + 2).toBe(4);
  });
});
```

### Métodos e Atributos Úteis (Matchers)
Comparações básicas
```
expect(10).toBe(10);          // igualdade estrita
expect(value).toEqual(obj);   // igualdade profunda (objetos/arrays)
expect(value).not.toBe(5);    // negação
```

Valores especiais
```
expect(null).toBeNull();
expect(undefined).toBeUndefined();
expect(true).toBeTruthy();
expect(false).toBeFalsy();
```

Arrays e objetos
```
expect([1, 2, 3]).toContain(2);
expect([1, 2, 3, 4, 5]).toHaveLength(5)
expect({ nome: "Victor" }).toHaveProperty("nome", "Victor");
```

Funções (spies/mocks)
```
const fn = jest.fn();
fn("chamado");

expect(fn).toHaveBeenCalled();          // foi chamado
expect(fn).toHaveBeenCalledTimes(1);    // quantas vezes
expect(fn).toHaveBeenCalledWith("chamado"); // parâmetros
```

DOM (com jest-dom)
```
expect(screen.getByText("Enviar")).toBeInTheDocument();
expect(button).toHaveClass("btn-primary");
expect(input).toHaveAttribute("type", "text");
```

### Recursos Extras do Jest
Mocks
- Criar funções falsas para simular comportamentos.
```
const api = {
  getUser: jest.fn().mockReturnValue({ id: 1, nome: "Victor" })
};

expect(api.getUser()).toEqual({ id: 1, nome: "Victor" });
```

Snapshots
- Guardam o estado renderizado do componente.
```
it("snapshot do botão", () => {
  const { asFragment } = render(<Button label="Teste" onClick={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
```

## Cobertura de Testes (Coverage)
### O que é?
- Mede quantas partes do código foram testadas.
- Gera relatórios mostrando:
  - **Statements** → quantas instruções foram executadas.
  - **Branches** → quantos caminhos condicionais (if/else, switch) foram testados.
  - **Functions** → quantas funções foram chamadas.
  - **Lines** → quantas linhas foram executadas.

### Como rodar cobertura
1. Adicione script no package.json:
```
"scripts": {
  "test": "jest",
  "test:coverage": "jest --coverage"
}
```
2. Execute no terminal: ``npm run test:coverage``
3. Resultado no console:
```
-------------------|---------|----------|---------|---------
File               | % Stmts | % Branch | % Funcs | % Lines
-------------------|---------|----------|---------|---------
All files          |   85.71 |    75.00 |   83.33 |   85.71
src/Button.tsx     |   100.0 |    100.0 |   100.0 |   100.0
-------------------|---------|----------|---------|---------
```
4. Relatório detalhado em coverage/lcov-report/index.html (pode abrir no navegador).

## Resumo Rápido
- **Funções principais**: describe, it/test, expect.
- **Matchers**: .toBe, .toEqual, .toContain, .toHaveBeenCalled, .toBeInTheDocument.
- **Mocks** simulam comportamentos; **snapshots** garantem que UI não mudou.
- **Cobertura**: use jest --coverage para medir quanto do código está testado.