## Mock Service Worker (MSW) – Testes de Componentes com API
### O que é MSW?
- MSW é uma ferramenta para mockar requisições HTTP em testes.
- Funciona no browser ou Node simulando API real, sem precisar da backend real.
- Permite testar componentes que dependem de chamadas assíncronas (fetch, axios, RTK Query).

### Instalação
``npm install msw --save-dev``

## Estrutura básica do MSW
### Criar uma pasta ``mocks/`` no projeto:
```
src/
  mocks/
    handlers.ts
    server.ts
```

### ``handlers.ts`` Define as rotas simuladas:
```
import { rest } from 'msw'

export const handlers = [
  rest.get('/api/jogos', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, titulo: 'Elden Ring', preco: 150 },
        { id: 2, titulo: 'Hogwarts Legacy', preco: 200 }
      ])
    )
  })
]
```

### ``server.ts`` Cria o servidor de testes:
```
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
```

## Configuração nos testes
- Antes de todos os testes, inicialize o servidor.
- Depois, limpe e feche.
```
// src/setupTests.ts (CRA) ou import direto no teste
import { server } from './mocks/server'

// Start server before all tests
beforeAll(() => server.listen())
// Reset handlers after each test (limpa mocks customizados)
afterEach(() => server.resetHandlers())
// Stop server after all tests
afterAll(() => server.close())
```

## Testando componente que faz requisição
Exemplo com componente ``ListaJogos`` que busca jogos via API:
```
import { render, screen, waitFor } from '@testing-library/react'
import ListaJogos from './ListaJogos'
import '@testing-library/jest-dom'

test('renderiza lista de jogos da API', async () => {
  render(<ListaJogos />)

  // espera até que os elementos estejam na tela
  await waitFor(() => {
    expect(screen.getByText('Elden Ring')).toBeInTheDocument()
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })
})
```
- ``waitFor`` é importante porque o componente faz requisição assíncrona.

## Alterando resposta da API em testes
Você pode simular erros ou diferentes retornos:
```
import { rest } from 'msw'
import { server } from '../mocks/server'

test('API retorna erro', async () => {
  server.use(
    rest.get('/api/jogos', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  render(<ListaJogos />)
  await waitFor(() => {
    expect(screen.getByText('Erro ao carregar jogos')).toBeInTheDocument()
  })
})
```
- ``server.use()`` sobrescreve o handler original para esse teste.

## Integração com Redux/RTK Query
Componentes que usam RTK Query ou dispatch de async thunk podem ser testados normalmente, pois MSW intercepta as requisições.

### Exemplo genérico:
```
// Component que usa RTK Query
const { data, isLoading } = useGetJogosQuery()

if(isLoading) return <span>Carregando...</span>
return <ul>{data.map(j => <li key={j.id}>{j.titulo}</li>)}</ul>
```

### Teste:
```
render(<Provider store={store}><ListaJogos /></Provider>)

await waitFor(() => {
  expect(screen.getByText('Elden Ring')).toBeInTheDocument()
})
```
- MSW garante que a API fake seja usada, sem alterar código do componente.

## Vantagens do MSW
Simula API real sem mockar internamente no componente.
Permite testar cenários de sucesso, erro ou dados diferentes.
Funciona tanto para testes unitários quanto integração de componentes.

## Resumo prático
- Instale MSW (npm i msw --dev).
- Crie handlers.ts com rotas simuladas.
- Crie server.ts com setupServer(handlers).
- No setupTests.ts inicialize (server.listen()) e limpe (server.resetHandlers()/server.close()).
- Nos testes, renderize componentes normalmente e use waitFor para esperar a resposta assíncrona.
- Para testes específicos, altere handlers com server.use().