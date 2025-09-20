## O que são Enums?
- Enums (enumerations) permitem definir um conjunto de valores nomeados que podem ser usados em vez de strings ou números soltos.
- No React (e em qualquer projeto com TypeScript), os Enums podem ser usados para organizar valores fixos e evitar “strings mágicas” espalhadas pelo código.

### Exemplo simples:
```
enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}
```

## Uso prático no React
### 1. Controlar estados de requisição
```
import { useState, useEffect } from 'react'

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export default function App() {
  const [status, setStatus] = useState<Status>(Status.LOADING)

  useEffect(() => {
    setTimeout(() => {
      setStatus(Status.SUCCESS)
    }, 2000)
  }, [])

  return (
    <div>
      {status === Status.LOADING && <p>Carregando...</p>}
      {status === Status.SUCCESS && <p>Dados carregados</p>}
      {status === Status.ERROR && <p>Erro ao carregar</p>}
    </div>
  )
}
```

### 2. Definir tipos de botão
```
enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

type ButtonProps = {
  label: string
  type: ButtonType
}

function Button({ label, type }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: type === ButtonType.PRIMARY ? 'blue' : 'gray',
        color: 'white',
        padding: '10px'
      }}
    >
      {label}
    </button>
  )
}
```
```
// Uso
export function App() {
  return (
    <>
      <Button label="Salvar" type={ButtonType.PRIMARY} />
      <Button label="Cancelar" type={ButtonType.SECONDARY} />
    </>
  )
}
```

## Benefícios de usar enums no React com TypeScript:
- Evita erros de digitação em strings ('sucess' em vez de 'success').
- Dá autocompletar no editor.
- Facilita a manutenção e leitura do código.