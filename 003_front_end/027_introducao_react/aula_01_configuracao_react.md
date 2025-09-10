## Criar um projeto com Vite
1. Abra o terminal na pasta onde deseja criar o projeto.
2. Rode o comando: ``npm create vite@latest``
3. Escolha as opções:
    - Nome do projeto → meu-projeto
    - Framework → React
    - Variante → JavaScript ou TypeScript
4. Entre na pasta do projeto: ``cd meu-projeto``
5. instale as dependências: ``npm install``
6. Inicie o servidor de desenvolvimento: ``npm run dev``

O React vai rodar em http://localhost:5173.

## Estrutura inicial do projeto
Depois de criado, você terá algo como:
```
meu-projeto/
│── node_modules/   → dependências
│── public/         → arquivos estáticos
│── src/
│   ├── App.jsx     → componente principal
│   ├── main.jsx    → ponto de entrada
│   └── index.css   → estilos globais
│── package.json    → dependências e scripts
│── vite.config.js  → configuração do Vite
```

## Arquivo ``main.jsx``
Esse é o ponto de entrada da aplicação, onde o React é montado na DOM:
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

## Arquivo ``App.jsx``
Aqui é o componente principal da aplicação:
```
function App() {
  return (
    <div>
      <h1>Olá, React com Vite 🚀</h1>
    </div>
  )
}

export default App
```

## Onde escrever o código?
- Os códigos podem ser escritos no ``App.jsx``
- Ou criar componentes com extenção ``.jsx`` em src/components/ e importar esses componentes dentro do ``App.jsx``
- Estilizar com index.css ou um CSS separado para cada componente