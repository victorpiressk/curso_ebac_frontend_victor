## O que é o useEffect
O useEffect é um hook que permite executar código em determinados momentos do ciclo de vida de um componente (montagem, atualização, desmontagem).

Ele serve para rodar efeitos colaterais, ou seja, coisas que não fazem parte direta do fluxo de renderização, como:
- Buscar dados em uma API
- Manipular o DOM diretamente
- Usar setTimeout ou setInterval
- Registrar/remover event listeners

## Sintaxe básica
```
import { useEffect } from "react";

useEffect(() => {
  // código do efeito (o que quero executar)
  
  return () => {
    // cleanup (executa ao desmontar ou antes de re-executar o efeito)
  };
}, [dependencias]);
```

## Funcionamento com exemplos
### 1. Executar sempre que o componente renderiza
```
useEffect(() => {
  console.log("Renderizou!");
});
```
Sem array de dependências → roda em toda renderização.

### 2. Executar apenas uma vez (ao montar)
```
useEffect(() => {
  console.log("Componente montou!");
}, []);
```
Array de dependências vazio (``[]``) → roda só na primeira montagem. Muito usado para buscar dados em APIs.

### 3. Executar quando um estado/variável mudar
```
import { useState, useEffect } from "react";

function Exemplo() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("O contador mudou:", contador);
  }, [contador]); // só roda quando "contador" muda

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  );
}
```
Com ``[contador]`` → só executa quando a variável ``contador`` mudar.

### 4. Cleanup (limpeza de efeitos)
Usado para desregistrar coisas, como intervalos ou event listeners, quando o componente desmontar.
```
useEffect(() => {
  const intervalo = setInterval(() => {
    console.log("Rodando...");
  }, 1000);

  return () => {
    clearInterval(intervalo); // limpa quando o componente sair da tela
  };
}, []);
```

## Resumindo:
- ``useEffect`` → controla efeitos colaterais no React.
- Sem dependências → roda sempre.
- ``[]`` vazio → roda só uma vez (montagem).
- Com variáveis no array → roda quando essas variáveis mudam.
- Return dentro do effect → faz a limpeza (cleanup).