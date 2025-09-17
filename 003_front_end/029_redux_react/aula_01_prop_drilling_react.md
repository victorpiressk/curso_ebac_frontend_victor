## O que é Prop Drilling no React?
- No React, prop drilling acontece quando você precisa passar dados ou funções de um componente "pai" até um componente "filho distante".
- Para isso, você acaba tendo que passar a prop através de vários componentes intermediários — mesmo que esses intermediários não usem a prop, apenas a repassem.

### Problema
Isso deixa o código:
- Mais difícil de manter, porque qualquer mudança na estrutura de componentes obriga a ajustar as props.
- Menos legível, já que você vê props em lugares onde elas não são realmente usadas.
- Mais propenso a erros, principalmente em aplicações grandes.

## Exemplo de Prop Drilling
```
// App -> Componente A -> Componente B -> Componente C
// Só o Componente C precisa da prop "user"

function App() {
  const user = "Victor";
  return <ComponenteA user={user} />;
}

function ComponenteA({ user }: { user: string }) {
  return <ComponenteB user={user} />;
}

function ComponenteB({ user }: { user: string }) {
  return <ComponenteC user={user} />;
}

function ComponenteC({ user }: { user: string }) {
  return <h1>Olá, {user}</h1>;
}
```
Aqui, ComponenteA e ComponenteB não usam user, mas precisam recebê-la só para repassar.

## Como Resolver o Prop Drilling?
### 1. Context API (nativo do React)
Permite criar um "contexto" global, evitando passar props manualmente.
```
import { createContext, useContext } from "react";

const UserContext = createContext("");

function App() {
  const user = "Victor";
  return (
    <UserContext.Provider value={user}>
      <ComponenteA />
    </UserContext.Provider>
  );
}

function ComponenteA() {
  return <ComponenteB />;
}

function ComponenteB() {
  return <ComponenteC />;
}

function ComponenteC() {
  const user = useContext(UserContext);
  return <h1>Olá, {user}</h1>;
}
```

### 2. Gerenciadores de Estado (Redux, Zustand, Jotai, etc.)
Úteis para projetos grandes, centralizando o estado em um "store".

### 3. Custom Hooks
Se o problema é reaproveitar lógica em vários lugares, hooks ajudam sem precisar ficar passando props.

## Resumindo:
- **Prop drilling** = passar props por muitos níveis desnecessários.
- **Solução** = usar Context API ou libs de gerenciamento de estado.