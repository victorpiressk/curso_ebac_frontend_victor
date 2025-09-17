## O que é Redux?
- O Redux é uma biblioteca de gerenciamento de estado inspirada no Flux, muito usada em projetos React (mas também funciona com Angular, Vue etc).
- Ele resolve o problema de prop drilling e de estados espalhados, centralizando tudo em um único Store global.

## Princípios do Redux
1. **Única fonte de verdade**
    - Existe apenas um Store que guarda todo o estado da aplicação.
2. **Estado é somente leitura**
    - Para mudar o estado, você nunca o altera diretamente.
    - Em vez disso, dispara uma Action.
3. **Mudanças são feitas com funções puras (Reducers)**
    - Os Reducers recebem o estado atual + Action e devolvem o novo estado, sem mutar o antigo.

## Ciclo de Dados no Redux
1. View (React Component) dispara uma Action
    - Exemplo: { type: "ADD_TODO", payload: "Estudar Redux" }
2. A Action passa pelo Dispatch
3. O Reducer processa a Action e retorna um novo estado
4. O Store guarda esse novo estado
5. As Views (React) são renderizadas novamente com os dados atualizados