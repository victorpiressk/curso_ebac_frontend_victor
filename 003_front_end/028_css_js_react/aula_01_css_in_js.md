## Estilizar componentes CSS in JS
- O CSS-in-JS é uma forma de aplicar estilos diretamente em componentes React usando **JavaScript**, sem precisar criar arquivos ``.css`` separados.
- A ideia é que os estilos ficam “junto” com o componente, tornando-o mais isolado e reutilizável.

## Como funciona na prática
Existem várias bibliotecas que implementam CSS-in-JS no React. As mais conhecidas são:
- styled-components
- Emotion
- Stitches

### 1. Usando styled-components
Com ele, você cria um componente já com estilo embutido:
```
import styled from "styled-components"

const Botao = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #0056b3;
  }
`

export default function App() {
  return <Botao>Clique aqui</Botao>
}
```
Aqui o Botao já é um componente React estilizado.

### 2. Usando Emotion (parecido com styled-components)
```
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

const estilo = css`
  color: hotpink;
  font-size: 20px;
`

export default function App() {
  return <h1 css={estilo}>Olá com Emotion!</h1>
}
```

### 3. Usando objetos JS (inline styles nativo do React)
Sem biblioteca extra, o React já permite passar estilos como objeto:
```
export default function App() {
  const estilo = {
    backgroundColor: "tomato",
    color: "white",
    padding: "10px",
    borderRadius: "5px"
  }

  return <button style={estilo}>Clique aqui</button>
}
```
Esse método é simples, mas não suporta coisas como pseudo-classes (:hover) ou media queries, por isso é comum usar bibliotecas externas.

## Vantagens do CSS-in-JS
- Escopo isolado (estilos não vazam entre componentes).
- Dinamismo: dá para usar variáveis e props para mudar estilos.
- Facilita a componentização.

## Desvantagens
- Pode aumentar o tamanho do bundle.
- Pode ser mais lento em apps muito grandes comparado ao CSS tradicional.