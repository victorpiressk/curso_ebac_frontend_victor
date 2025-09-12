## O que são CSS Modules?
- CSS Modules são arquivos CSS que funcionam de forma local/escopada.
- Diferente do CSS global, onde classes podem colidir entre componentes, no CSS Module cada classe é gerada com um nome único.
- Isso evita conflitos de estilo entre componentes diferentes.

## Estrutura de Arquivos
Normalmente, criamos arquivos CSS com a extensão:
```
Botao.jsx
Botao.module.css
```

## Exemplo de uso
### 1. Criar o arquivo CSS
```
/* Botao.module.css */
.botao {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.botao:hover {
  background-color: darkblue;
}
```

### 2. Importar no componente
```
// Botao.jsx
import React from "react";
import styles from "./Botao.module.css";

function Botao() {
  return <button className={styles.botao}>Clique aqui</button>;
}

export default Botao;
```
Explicação:
- ``import styles from "./Botao.module.css"`` importa os estilos como objeto JavaScript.
- ``styles.botao`` acessa a classe ``.botao`` dentro do CSS Module.
- O React transforma ``.botao`` em algo como ``Botao_botao__xYz123`` no HTML, evitando conflitos.

## Várias classes no mesmo elemento
Se precisar aplicar mais de uma classe, usamos template string ou join:
```
<button className={`${styles.botao} ${styles.ativo}`}>OK</button>
```

## Benefícios
- Escopo local → evita conflito de estilos.
- Melhor organização entre componentes.
- Suporte nativo no React (com CRA, Vite, Next.js etc.).