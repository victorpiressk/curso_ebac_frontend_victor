## O que é o ES Modules
- O ES Modules (ou ECMAScript Modules) é o sistema oficial de módulos do JavaScript, introduzido no ES6 (2015).
- Ele permite organizar o código em arquivos separados e importar/exportar apenas o que você precisa.
- Antes dele, usávamos soluções alternativas como CommonJS (require, usado no Node.js antigo) ou AMD no navegador.

### O que resolve?
- Organização → código dividido em vários arquivos (não tudo num só).
- Reutilização → você pode importar funções, classes e variáveis de outros arquivos.
- Isolamento → cada módulo tem seu escopo (não polui o global).
- Carregamento otimizado → o navegador só baixa o que realmente precisa.

### Sintaxe básica do ES Modules
#### Exportando variáveis e funções
- nome do arquivo > ./arquivo_exemplo.js
```
export const PI = 3.14;

export function somar(a, b) {
return a + b;
}
```

#### Exportação padrão (só pode ter uma por arquivo)
```
export default function multiplicar(a, b) {
  return a * b;
}
```

#### Importação normal (nomes iguais aos exportados)
````
import { PI, somar } from './arquivo_exemplo.js';

console.log(somar(2, 3)); // 5
console.log(PI); // 3.14
````

#### Importação da exportação default (pode dar qualquer nome)
````
import mult from './arquivo_exemplo.js';

console.log(mult(2, 4)); // 8
````