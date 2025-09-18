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

## Estrutura básica com Redux Toolkit
Um projeto com RTK normalmente tem essa estrutura mínima:
```
src/
 ├── app/
 │    └── store.ts        # configuração global da store
 ├── features/
 │    └── contador/
 │         ├── contadorSlice.ts  # reducers + actions
 │         └── Contador.tsx      # componente que usa o slice
 └── index.tsx            # provider Redux
```

## Configurar o Store
```
import { configureStore } from '@reduxjs/toolkit'
import contadorReducer from '../features/contador/contadorSlice'

export const store = configureStore({
  reducer: {
    contador: contadorReducer
  }
})

// Tipos para TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

## Criar um Slice (estado + reducer + actions)
O slice combina estado inicial, reducers e actions em um único arquivo.
```
import { createSlice } from '@reduxjs/toolkit'

interface ContadorState {
  valor: number
}

const initialState: ContadorState = {
  valor: 0
}

const contadorSlice = createSlice({
  name: 'contador',
  initialState,
  reducers: {
    incrementar: (state) => {
      state.valor += 1
    },
    decrementar: (state) => {
      state.valor -= 1
    },
    incrementarPorValor: (state, action) => {
      state.valor += action.payload
    }
  }
})

export const { incrementar, decrementar, incrementarPorValor } =
  contadorSlice.actions
export default contadorSlice.reducer
```


## Usar o Store no React
No ponto de entrada da aplicação, envolver com o ``Provider``:
- Adicionar o store no arquivo ``src/index.tsx`` ou ``src/App.tsx`` dependendo do tipo de aplicação (nível de componetização).

### Adicionando no Index (componetização simples):
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

## Seletores Redux
Consumir no Componente:
```
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../app/store'
import { incrementar, decrementar } from './contadorSlice'

export function Contador() {
  const valor = useSelector((state: RootState) => state.contador.valor)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <h1>Valor: {valor}</h1>
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(decrementar())}>-</button>
    </div>
  )
}
```

## Vantagens do Redux
- Estado centralizado (facilita rastrear bugs).
- Ferramentas incríveis como Redux DevTools.
- Ótimo para apps grandes com muito compartilhamento de estado.

## Quando não usar Redux?
- Projetos pequenos ou médios onde o Context API já resolve.
- Se quase não existe estado global.

## Resumindo
- ``configureStore`` → cria a store sem configuração manual.
- ``createSlice`` → gera reducers e actions juntos.
- ``useSelector`` → lê estado global.
- ``useDispatch`` → dispara ações.