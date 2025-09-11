## Componentização no React (Estrutura de pastas)
A forma mais comum de organizar os componentes em um projeto React é criando uma pasta ``components`` dentro de ``src``:
```
src/
 ┣ components/
 ┃ ┣ Header.jsx
 ┃ ┣ Footer.jsx
 ┃ ┗ Botao.jsx
 ┣ App.jsx
 ┗ index.js
```
- ``App.jsx``: é o componente raiz, que concentra e organiza os outros.
- ``components/``: pasta que guarda os componentes reutilizáveis.
- Cada componente geralmente fica em um arquivo separado com a extensão ``.jsx``.

## Exportando componentes
Existem duas formas principais de exportar:

### Export default
É a forma mais comum, usada quando o arquivo exporta apenas um único componente.
```
// Botao.jsx
export default function Botao() {
  return <button>Clique aqui</button>;
}
```
Nesse caso, na hora de importar, você pode dar qualquer nome:
```
import Botao from "./components/Botao";
```

### Export nomeado
Usado quando o mesmo arquivo tem mais de um componente ou função.
```
// Header.jsx
export function Header() {
  return <h1>Topo do site</h1>;
}

export function SubHeader() {
  return <h2>Subtítulo</h2>;
}
```
Para importar, você precisa usar chaves { } com o mesmo nome da exportação:
```
import { Header, SubHeader } from "./components/Header";
```

## Importando no App.jsx
Depois de exportar, você importa o componente no App.jsx (ou em qualquer outro componente) e o usa como se fosse uma tag HTML:
```
import Botao from "./components/Botao";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Botao />
    </div>
  );
}

export default App;
```

## Resumindo:
- Estrutura em pasta components/ dentro de src.
- Cada componente em um arquivo .jsx.
- Usa-se export default quando há apenas um componente no arquivo.
- Usa-se export nomeado quando há vários.
- Importação é feita com import e os componentes viram tags JSX no HTML do React.