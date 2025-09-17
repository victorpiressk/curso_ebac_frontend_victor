## O que é Flux?

Flux é um padrão de arquitetura criado pelo Facebook para resolver o problema de gerenciamento de estado em aplicações front-end, especialmente quando os dados precisavam fluir entre muitos componentes no React.

A ideia principal é manter o fluxo de dados unidirecional → ou seja, os dados sempre andam em uma direção só, o que torna a aplicação mais previsível e fácil de depurar.

## Como funciona o Flux?
### O ciclo é formado por 4 partes principais:
1. **Action (Ação)**
    - É um objeto simples que descreve o que aconteceu.
    - Exemplo: { type: "ADD_TODO", payload: "Estudar React" }
2. **Dispatcher (Despachante)**
    - É o único ponto de envio de ações.
    - Ele recebe a Action e a repassa para os Stores.
    - Garante que todas as mudanças passem pelo mesmo fluxo.
3. **Store (Armazém de estado)**
    - Onde fica o estado da aplicação.
    - Recebe as Actions do Dispatcher e atualiza os dados.
    - Não altera a UI diretamente, apenas guarda os dados.
4. **View (Componentes React)**
    - São os componentes da interface que exibem os dados vindos da Store.
    - Quando a Store muda, as Views são renderizadas novamente.

## Ciclo de Dados no Flux
1. Usuário interage com a View (ex.: clica em um botão).
2. A View dispara uma Action.
3. A Action vai para o Dispatcher.
4. O Dispatcher envia essa Action para a Store.
5. A Store atualiza o estado.
6. As Views são atualizadas automaticamente com os novos dados.

Fluxo unidirecional: View → Action → Dispatcher → Store → View

## Flux vs Redux
### O Redux foi inspirado no Flux, mas trouxe simplificações:
- No Redux só existe um único Store global (no Flux podem existir vários).
- O Dispatcher do Flux desaparece no Redux — o dispatch já faz esse papel.
- O Redux usa reducers puros para atualizar o estado.

## Em resumo:
- **Flux** = padrão original do Facebook, base para entender gerenciamento de estado no React.
- **Redux** = implementação mais popular e simplificada desse conceito.