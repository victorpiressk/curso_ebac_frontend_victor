## Estado no React
### O que é:
O estado (state) é um objeto/variável controlada pelo React que guarda informações que podem mudar ao longo do tempo e que influenciam o que aparece na tela.
Sempre que o estado muda, o React re-renderiza (renderiza de novo) o componente para refletir a atualização na interface.

### Como usar:
Para criar estado em um componente funcional, usamos o hook useState:
```
import { useState } from "react";

function Exemplo() {
  const [contador, setContador] = useState(0); // contador = estado, setContador = função que altera

  return <p>O contador está em: {contador}</p>;
}
```
O useState(0) inicia o estado com o valor 0. Em caso de texto, o useState('') inicia com uma string vazia.

## Eventos no React
### O que é:
Eventos são ações do usuário ou do navegador, como cliques, digitação, envio de formulário etc.
No React, os eventos são escritos em camelCase e recebem uma função como resposta.

### Exemplo de eventos comuns:
- ``onClick ``→ clique do mouse
- ``onChange`` → mudança em input/campo
- ``onSubmit`` → envio de formulário
- ``onMouseEnter``, ``onMouseLeave`` → interações com o mouse
- ``onKeyDown``, ``onKeyUp`` → teclado

## Estado + Eventos juntos
O mais comum no React é usar eventos para **atualizar o estado**.

**Exemplo:** contador com botões de incrementar e decrementar:
```
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}

export default Contador;
```
### Nesse exemplo:
- ``useState(0)`` cria o estado inicial contador = 0
- ``onClick={() => setContador(contador + 1)}`` altera o estado ao clicar
- O React renderiza novamente o ``<p>`` com o valor atualizado

## Resumindo:
- **Estado** → guarda os dados dinâmicos do componente.
- **Eventos** → reagem às ações do usuário (cliques, digitação, etc).
- **Ligação dos dois** → eventos normalmente atualizam o estado, e o React re-renderiza a interface automaticamente.