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

## Configurar o Store
1. Crie o arquivo do Store: ``src/store/index.ts``
2. Configuração basica do Store:
```
import { configureStore } from '@reduxjs/toolkit'
import exemploReducer from './exemploSlice'

const store = configureStore({
  reducer: {
    exemplo: exemploReducer
  }
})

export default store
```

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