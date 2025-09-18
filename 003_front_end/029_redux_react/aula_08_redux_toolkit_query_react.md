## Redux Toolkit Query
O Redux Toolkit Query (RTK Query) é uma extensão oficial do Redux Toolkit para requisições HTTP. Ele facilita o consumo de APIs sem precisar instalar bibliotecas externas como Axios ou React Query.

## Instalação
- Se você já tem o Redux Toolkit instalado, o RTK Query já vem junto — não precisa instalar nada extra. Ele faz parte do pacote @reduxjs/toolkit.
- Mas você vai usar também o react-redux (para conectar ao React).
- ``npm install @reduxjs/toolkit react-redux``

## Como funciona
1. Criação de um serviço de API usando createApi.
2. Definição de endpoints (``query`` para GET, ``mutation`` para POST/PUT/DELETE).
3. Geração automática de hooks (``useGetPostsQuery``, ``useAddPostMutation``, etc).
4. Cache automático → RTK Query guarda os dados em cache no Redux e atualiza quando necessário.

## Exemplo simples
1. Criar arquivo: services/api.ts
2. Configurar o arquivo api.ts:
```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<any[], void>({
      query: () => 'posts'
    }),
    addPost: builder.mutation<any, { title: string }>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost
      })
    })
  })
})

// Hooks automáticos
export const { useGetPostsQuery, useAddPostMutation } = api
```

3. Configurar o api no arquivo store.ts
```
import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/api'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
```

4. Configurar o api no arquivo App.tsx
```
import { Provider } from 'react-redux'
import { store } from './store'
import { useGetPostsQuery, useAddPostMutation } from './services/api'

function Posts() {
  const { data, isLoading } = useGetPostsQuery()
  const [addPost] = useAddPostMutation()

  if (isLoading) return <p>Carregando...</p>

  return (
    <div>
      <button onClick={() => addPost({ title: 'Novo Post' })}>Adicionar</button>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  )
}
```

## Em resumo:
- ``createApi`` cria a definição da API.
- ``fetchBaseQuery`` é um fetch simplificado já pronto.
- Hooks automáticos substituem ``useEffect + axios/fetch + useState``.
- Cache automático evita chamadas desnecessárias à API.