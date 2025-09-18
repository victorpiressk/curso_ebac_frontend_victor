## Redux Toolkit
O Redux Toolkit (RTK) é a forma oficial e recomendada de usar Redux hoje. Ele simplifica a configuração, reduz a verbosidade e resolve os problemas clássicos do Redux puro (muito boilerplate e repetição).

## O que é Redux Toolkit?
- Biblioteca que fica em cima do Redux tradicional.
- Fornece funções utilitárias prontas (configureStore, createSlice, createAsyncThunk) que deixam o código mais curto e legível.
- Inclui boas práticas já configuradas (como o uso de ``immer`` para manipulação de estado imutável).

## Instalação Redux
Para usar o Redux moderno em um projeto React, você precisa instalar dois pacotes:
- ``react-redux ``→ é a integração oficial entre React e Redux (fornece ``<Provider>``, ``useSelector``, ``useDispatch``).
- ``@reduxjs/toolkit`` → fornece as funções principais (``configureStore``, ``createSlice``, ``createAsyncThunk``, etc.).`

Instalação: ``npm install react-redux @reduxjs/toolkit``

## Criar um Slice (estado + reducer + actions)
O slice combina estado inicial, reducers e actions em um único arquivo.
- Crie a pasta de reducers e o arquivo de Slice: ``src/store/reducers/exemploSlice.ts``

```
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ExemploState = {
  items: exemplo[]
}

const initialState: ExemploState = {
  items: []
}

const exemploSlice = createSlice({
  name: 'exemplo',
  initialState,
  reducers: {
    addExemplo: (state, action: PayloadAction<exemplo>) => {
      state.items.push(action.payload)
    },
    removeExemplo: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    }
  }
})

export const { addExemplo, removeExemplo } = ExemploSlice.actions
export default exemploSlice.reducer
```

## Configurar o Store
1. Crie o arquivo do Store: ``src/store/index.ts``
2. Configuração basica do Store:
```
import { configureStore } from '@reduxjs/toolkit'
import exemploReducer from './exemploSlice'

export const store = configureStore({
  reducer: {
    exemplo: exemploReducer
  }
})
```

## Usar o Store no React
No ponto de entrada da aplicação, envolver com o ``Provider``:
- Adicionar o store no arquivo ``src/index.tsx`` ou ``src/App.tsx`` dependendo do tipo de aplicação.

### Adicionando no Index:
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
```

### Adicionando no App:
```
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Game = {
  id: number
  titulo: string
  plataformas: string[]
  precoAntigo: number
  preco: number
  categoria: string
  imagem: string
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/produtos')
      .then((res) => res.json())
      .then((res) => setGames(res))
  }, [])

  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <div className="container">
          <Header />
          <Produtos jogos={games} adicionarAoCarrinho={adicionarAoCarrinho} />
        </div>
      </Provider>
    </>
  )
}

export default App
```