## O que é o Styled Components?
- É uma biblioteca que permite escrever CSS dentro do JavaScript, mas de forma encapsulada no componente.
- Cada componente recebe seu estilo próprio, evitando conflitos de classes globais.
- Quando usamos TypeScript, podemos tipar as ``props`` para garantir que os estilos recebam valores corretos.

## Instalação Styled Components
- No projeto, instale: ``npm install styled-components``
- Se quiser ter suporte de tipagem (TypeScript): ``npm install --save-dev @types/styled-components``

## Criação de estilos
### Exemplo simples:
```
import styled from 'styled-components'

const Botao = styled.button`
    background-color: blue;
`

function Teste() {
  return <Botao>Clique aqui</Botao>
}

export default Teste
```
Aqui o ``styled.button`` cria um botão React com o estilo definido.

### Exemplo dinâmico com props (Sem TypeScript):
```
import styled from 'styled-components'

const Botao = styled.button`
    background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
`

function Teste() {
    return (
        <>
            <Botao primary>Botão Primário</Botao>
            <Botao>Botão Secundário</Botao>
        </>
    )
}

export default Teste
```
- Aqui, se o botão tiver a prop ``primary``, fica azul, caso contrário fica cinza.
- Esse código funciona se você estiver usando JavaScript puro (``.jsx``), porque o JS não faz checagem de tipos. O ``props.primary`` é aceito direto.

### Exemplo dinâmico com props (com TypeScript):
```
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean  // aqui declaramos que existe a prop `principal`
}

const Botao = styled.button<BotaoProps>`
    background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
`

function Teste() {
    return (
        <>
            <Botao primary>Botão Primário</Botao>
            <Botao>Botão Secundário</Botao>
        </>
    )
}

export default Teste
```
Isso garante que, se você tentar usar ``<Botao>`` sem principal ou passar um tipo errado (ex: uma string), o TypeScript vai te avisar.

### Exemplo dinâmico com props (recebendo valores):
```
// Caixa.tsx
import styled from "styled-components"

type CaixaProps = {
  largura?: string
  altura?: string
  cor?: string
}

const Caixa = styled.div<CaixaProps>`
  width: ${(props) => props.largura || "100px"};
  height: ${(props) => props.altura || "100px"};
  background-color: ${(props) => props.cor || "lightgray"};
  border-radius: 8px;
`

function Caixa() {
  return (
    <>
      <Caixa largura="200px" altura="100px" cor="tomato" />
      <Caixa largura="150px" cor="skyblue" />
    </>
  )
}

export default Caixa
```

### Exemplo com herança de estilos:
```
import styled from "styled-components"

type BotaoProps = {
  principal: boolean  // aqui declaramos que existe a prop `principal`
}

const Botao = styled.button<BotaoProps>`
    background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
`

const BotaoDanger = styled(Botao)`
  background-color: red;
  color: white;
`

const BotaoWarning = styled(Botao)`
  background-color: yellow;
  color: black;
`

function Teste() {
    return (
        <>
            <Botao primary>Botão Primário</Botao>
            <Botao>Botão Secundário</Botao>
            <BotaoDanger>Botão erro</BotaoDanger>
            <BotaoWarning>Botão informação</BotaoWarning>
        </>
    )
}

export default Teste
```

### Mudando a tag do HTML (``as``)
Com styled-components, você também pode reutilizar o estilo de um componente em outra tag:
```
import styled from "styled-components"

type BotaoProps = {
  principal: boolean
}

const Botao = styled.button<BotaoProps>`
    background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
`

const BotaoLinkEstilizado = styled(Botao)`
    text-decoration: none;
`

function Teste() {
    return (
        <>
            <Botao primary>Botão Primário</Botao>
            {/* Usando o mesmo estilo, mas em uma <a> */}
            <BotaoLinkEstilizado as="a" href="#" primary>
                Link estilizado
            </BotaoLinkEstilizado>
        </>
    )
}

export default Teste
```

## Vantagens:
- **Escopo isolado** → O CSS só afeta o componente.
- **Sem conflitos de classe.**
- **Reutilizável** → Estilos podem ser exportados/importados.
- **Dinâmico** → Fácil alterar estilo via props ou até tema global.

## Resumo:
- O Styled Components permite criar componentes React estilizados.
- Com TypeScript, usamos ``<TipoDeProps>`` para tipar as propriedades que controlam estilos.
- Isso aumenta a **segurança do código** e evita erros comuns.
- Pode estender componentes existentes e criar novas variações.
- Isso evita duplicação de código e mantém os estilos consistentes.
- Pode adicionar novas regras, sobrescrever propriedades e até trocar a tag HTML com ``as``.

## Criar Estilo Global
- O ``createGlobalStyle`` do styled-components é usado para definir estilos globais (que afetam toda a aplicação), diferente dos componentes normais que são isolados.
- Ele é útil para reset de CSS, fontes globais, cores de fundo padrão, etc.

## Como usar ``createGlobalStyle``
### Passo 1 – Importar e criar os estilos globais
```
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  /* Reset CSS básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Fonte padrão */
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
```

### Passo 2 – Usar no App principal
```
import React from "react"
import GlobalStyle from "./GlobalStyle"
import Teste from "./Teste"

function App() {
  return (
    <>
      {/* GlobalStyle é aplicado uma vez só */}
      <GlobalStyle />  
      <Teste />
    </>
  )
}

export default App
```

## Combinando com ThemeProvider
Você pode usar variáveis de tema dentro do createGlobalStyle:
```
import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
  }
`

const tema = {
  bg: "#121212",
  text: "#fff"
}

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyle />
      <h1>Modo Escuro com styled-components 🌙</h1>
    </ThemeProvider>
  )
}
```

## Resumo:
- ``createGlobalStyle`` → Define estilos globais (reset, body, fontes, etc).
- Deve ser usado uma vez dentro do App.
- Funciona junto com ThemeProvider para temas dinâmicos (ex: dark mode).
