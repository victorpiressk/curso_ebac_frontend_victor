## Objetivo de testes de componentes
- Garantir que o componente renderiza corretamente.
- Testar interações do usuário (cliques, digitação, envio de formulários).
- Validar estado interno ou props.
- Conferir alterações no DOM.
- Garantir que componentes que dependem da store renderizam corretamente.
- Testar interações que disparam ações no Redux.

## Dependências necessárias
Para todos os projetos React + TS:
``npm install --save-dev jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom``
- ``jest`` → framework de testes.
- ``@types/jest`` → tipagem para TypeScript.
- ``ts-jest`` → permite Jest rodar TS/TSX.
- ``@testing-library/react`` → renderiza e interage com componentes.
- ``@testing-library/jest-dom`` → matchers extras para DOM.

## Configuração básica (CRA ou Vite)
- **CRA**: o ``setupTests.ts`` já é carregado automaticamente. Apenas adicione: ``import '@testing-library/jest-dom'``
- **Vite ou outro setup**: crie ``setupTests.ts`` e configure no Jest (``setupFilesAfterEnv``).

## Estrutura de testes
- Arquivo ao lado do componente: ``MeuComponente.test.tsx`` Ou em pasta: ``__tests__/MeuComponente.test.tsx``
- Sempre usar ``.test.tsx`` ou ``.spec.tsx.``
- Renderizar componente dentro de um Provider com a store.

### Exemplo de estrutura:
```
src/
  components/
    __tests__/
        MeuComponente.test.tsx
    MeuComponente.tsx
```

## Funções principais do teste
- ``describe`` → agrupa testes relacionados.
- ``it`` ou ``test`` → define cada caso de teste.
- ``expect`` → faz as verificações (assertions).

## Renderizando um componente
```
import { render, screen } from '@testing-library/react'
import MeuComponente from './MeuComponente'

describe('Testes do componente MeuComponente', () => {
  test('deve renderizar corretamente', () => {
    render(<MeuComponente/>)
    expect(screen.getByText('Olá')).toBeInTheDocument()
  })
})
```

## Testando interações
- Precisa criar um id de teste para o botao: ``data-testid="..."``
- ``fireEvent`` → simula eventos do usuário.
```
import { render, screen, fireEvent } from '@testing-library/react'
import MeuComponente from './MeuComponente'

describe('Testes do componente MeuComponente', () => {
  test('Deve incrementa contador', () => {
    const botao = screen.getByTestId('btn-incrementar')
    fireEvent.click(botao)

    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
```

## Renderizando um componente com props
- Sempre teste diferentes combinações de props.
```
test('renderiza com props diferentes', () => {
  render(<MeuComponente texto="Teste" />)
  expect(screen.getByText('Teste')).toBeInTheDocument()
})
```

- Teste cenários diferentes baseados em props ou estado.
```
render(<MeuComponente ativo={true} />)
expect(screen.getByText('Ativo')).toBeInTheDocument()

render(<MeuComponente ativo={false} />)
expect(screen.queryByText('Ativo')).not.toBeInTheDocument()
```
## Testes de componentes com Redux
### 1. Criando uma store de teste
- Para testar Redux, não use a store global diretamente.
- Crie uma store específica para o teste com configureStore.
- Permite passar estado inicial (preloadedState) se necessário.
```
import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from '../store/reducers/carrinho'

export function criarStoreTeste(preloadedState?: any) {
  return configureStore({
    reducer: { carrinho: carrinhoReducer },
    preloadedState
  })
}
```

### 2. Renderizando componente
```
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { criarStoreTeste } from '../store/store'
import MeuComponente from './MeuComponente'

test('renderiza componente com estado do Redux', () => {
  const store = criarStoreTeste({
    carrinho: { itens: [{ id: 1, titulo: 'Jogo', preco: 100 }] }
  })

  render(
    <Provider store={store}>
      <MeuComponente />
    </Provider>
  )

  expect(screen.getByText('Jogo')).toBeInTheDocument()
})
```

### 3. Testando interações que disparam ações
- Exemplo: botão que adiciona item ao carrinho:
```
test('dispara ação de adicionar item', () => {
  const store = criarStoreTeste({ carrinho: { itens: [] } })

  render(
    <Provider store={store}>
      <MeuComponente />
    </Provider>
  )

  fireEvent.click(screen.getByText('Adicionar Jogo'))
  const state = store.getState()
  expect(state.carrinho.itens.length).toBe(1)
})
```

### 4. Testando diferentes estados (preloadedState)
```
test('renderiza corretamente com múltiplos itens', () => {
  const store = criarStoreTeste({
    carrinho: {
      itens: [
        { id: 1, titulo: 'Jogo A', preco: 100 },
        { id: 2, titulo: 'Jogo B', preco: 150 }
      ]
    }
  })

  render(
    <Provider store={store}>
      <MeuComponente />
    </Provider>
  )

  expect(screen.getByText('Jogo A')).toBeInTheDocument()
  expect(screen.getByText('Jogo B')).toBeInTheDocument()
})
```

## Resumo prático
- Crie arquivos .test.tsx ao lado do componente.
- Renderize com render().
- Use screen para selecionar elementos.
- Simule interações com fireEvent.
- Use matchers do jest-dom.
- Teste diferentes props, estados e cenários.
- Para componentes Redux: crie store de teste com configureStore.
- Use preloadedState para simular diferentes cenários.
- Renderize o componente dentro de Provider.