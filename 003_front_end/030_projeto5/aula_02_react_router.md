## O que é o React Router?
- É uma biblioteca que permite criar rotas em aplicações React (SPA — Single Page Application).
- Com ele você consegue navegar entre páginas sem recarregar o navegador.
- A versão 6 do React Router usamos o componente ``<BrowserRouter>`` para encapsular a aplicação.
- A partir da versão v6.4+ do React Router trouxe uma nova API baseada em "Data Routers", que usa ``createBrowserRouter`` e ``RouterProvider``.

## Diferença principal

### BrowserRouter + Routes + Route
- Forma mais simples e declarativa (boa para projetos pequenos e médios).
- Rotas são escritas em JSX.
- Não tem suporte direto para loaders, actions e error handling.

### createBrowserRouter + RouterProvider
- Forma mais poderosa e flexível (boa para apps complexos).
- Rotas são definidas em objetos JavaScript, o que facilita configuração.
- Suporta recursos novos do React Router:
    - loaders → buscar dados antes de renderizar a página.
    - actions → lidar com formulários e mutações de dados.
    - errorElement → páginas de erro personalizadas.
    - Melhor controle de navegação e pré-carregamento.

## Configuração React Router
Instalação do pacote: ``npm install react-router-dom``

### (API clássica com ``<BrowserRouter>`` e ``<Routes>``)
Estrutura básica:
```
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```
Criando páginas
Exemplo ``Home.tsx``:
```
export default function Home() {
  return <h1>🏠 Página Inicial</h1>
}
```
Exemplo About.tsx:

export default function About() {
  return <h1>ℹ️ Sobre nós</h1>
}

### (API nova com createBrowserRouter e RouterProvider)
```
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
```

### Quando usar cada um?
- Projetos simples/médios → pode usar ``BrowserRouter`` + ``Routes``.
- Projetos grandes com integração de dados (APIs, formulários, error boundaries, etc.) → prefira ``createBrowserRouter`` + ``RouterProvider``.

## Como declara/configura as rotas

### 1. Criação de páginas
#### Igual nas duas abordagens. Você cria componentes (Home.tsx, About.tsx, etc.) e aponta para eles nas rotas.
Exemplo ``Home.tsx``:
```
export default function Home() {
  return <h1>🏠 Página Inicial</h1>
}
```
Exemplo ``About.tsx``:
```
export default function About() {
  return <h1>ℹ️ Sobre nós</h1>
}
```

### 2. Navegação com ``<Link>``
Igual nas duas.
```
<Link to="/about">Ir para About</Link>
```

### 3. Rotas dinâmicas
#### Igual, só muda a forma de declarar.

Com ``<BrowserRouter>``:
```
<Route path="/produto/:id" element={<Produto />} />
```


Com ``createBrowserRouter``:
```
{
  path: "/produto/:id",
  element: <Produto />
}
```

E no componente você pega com:
```
import { useParams } from 'react-router-dom'

function Produto() {
  const { id } = useParams()
  return <h1>Produto {id}</h1>
}
```

### 4. Navegação programática
Igual nas duas.
```
import { useNavigate } from 'react-router-dom'

function Botao() {
  const navigate = useNavigate()
  return <button onClick={() => navigate('/about')}>Ir para About</button>
}
```

### 5. Rotas aninhadas
#### Aqui tem uma pequena diferença na sintaxe, mas o conceito é o mesmo.

Com ``<BrowserRouter>``:
```
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="perfil" element={<Perfil />} />
    <Route path="config" element={<Config />} />
  </Route>
</Routes>
```

Com ``createBrowserRouter``:
```
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "perfil", element: <Perfil /> },
      { path: "config", element: <Config /> }
    ]
  }
])
```

E dentro de ``Dashboard``:
```
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* Aqui as rotas filhas aparecem */}
    </div>
  )
}
```

## Resumindo
- **Funcionalidades** → são as mesmas nas duas APIs.
- **Diferença real** → está no modo de declarar/configurar as rotas.
- ``createBrowserRouter`` te dá recursos extras (loader, action, errorElement), mas se você não precisa disso, pode usar ``BrowserRouter`` sem problema.