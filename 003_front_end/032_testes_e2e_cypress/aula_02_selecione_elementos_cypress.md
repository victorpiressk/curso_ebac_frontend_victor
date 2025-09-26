## Seleção de Elementos no Cypress
- No Cypress, selecionar elementos é uma das tarefas mais importantes para escrever testes confiáveis.
- Assim como no DOM normal (JS/QuerySelector), usamos seletores CSS e atributos personalizados.

## Configuração Básica para acessar a página do projeto/site
Arquivo ``cypress.config.ts`` (gerado automaticamente, mas você pode ajustar):
```
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // ajuste para o seu projeto
    setupNodeEvents(on, config) {
      // plugins, se necessário
    },
  },
});
```
Assim, você pode usar ``cy.visit("/")`` ao invés de ``cy.visit("http://localhost:5173/")``.

## Tipos de Seleção de Elementos
### 1. Seleção por Tag
Seleciona todos os elementos com determinada tag.
```
cy.get('button')     // Seleciona todos os botões
cy.get('input')      // Seleciona todos os campos de input
```

### 2. Seleção por Classe
Usa ``.`` como no CSS.
```
cy.get('.btn-primary')  // Seleciona elemento com a classe 'btn-primary'
cy.get('.card.item')    // Seleciona elemento que tem as classes 'card' e 'item'
```

### 3. Seleção por ID
Usa ``#`` como no CSS.
```
cy.get('#login-button')   // Seleciona elemento com id="login-button"
```

### 4. Seleção por Atributo
Podemos usar qualquer atributo HTML.
```
cy.get('[type="submit"]')         // Seleciona input/button do tipo submit
cy.get('[placeholder="Email"]')   // Seleciona input com placeholder "Email"
```

Combinando atributos:
```
cy.get('input[required][type="text"]')
```

### 5. Seleção por Texto
#### ``cy.contains()``
Busca elemento que contenha texto.
```
cy.contains('Login')            // Encontra botão ou link com texto "Login"
cy.contains('button', 'Salvar') // Encontra <button> com texto "Salvar"
```

### 6. Seleção Hierárquica
Seleção de descendentes:
```
cy.get('.form').find('input')   // Encontra inputs dentro de .form
```

Filtrar pelo contexto:
```
cy.get('ul li').first()         // Primeiro item da lista
cy.get('ul li').last()          // Último item da lista
cy.get('ul li').eq(2)           // Terceiro item (índice começa em 0)
```

### 7. Seleção por Pseudo-classes CSS
```
cy.get('ul li:nth-child(2)')  // Segundo item da lista
cy.get('input:disabled')      // Todos os inputs desabilitados
cy.get('input:checked')       // Inputs marcados (checkbox/radio)
```

### 8. Seleção por Data Attributes (Recomendado)
Boa prática: usar ``data-testid``, ``data-cy`` ou ``data-test``.
```
<button data-cy="btn-login">Entrar</button>
```

Teste:
```
cy.get('[data-cy="btn-login"]').click()
```

## Comandos Comuns Após Seleção
Depois de selecionar um elemento, podemos encadear comandos:

### 1. Interação
```
cy.get('#username').type('victor')     // Digitar
cy.get('#password').clear().type('123') // Limpar e digitar
cy.get('#login-button').click()         // Clicar
cy.get('input[type="checkbox"]').check() // Marcar checkbox
cy.get('input[type="checkbox"]').uncheck() // Desmarcar
cy.get('select').select('Opção 1')      // Selecionar em dropdown
```

### 2. Asserções
```
cy.get('#login-button').should('be.visible')
cy.get('#username').should('have.value', 'victor')
cy.get('h1').should('contain', 'Bem-vindo')
cy.get('ul > li').should('have.length', 1)
```

### 3. Navegação pelo DOM
```
cy.get('.item').parent()   // Pega o pai
cy.get('.item').children() // Pega os filhos
cy.get('.item').siblings() // Pega os irmãos
cy.get('.item').next()     // Próximo irmão
cy.get('.item').prev()     // Irmão anterior
```

## Resumo das Formas de Seleção
```
| Tipo               | Exemplo                           | Uso recomendado                |
| ------------------ | --------------------------------- | ------------------------------ |
| **Tag**            | `cy.get('button')`                | Geral, mas pouco específico    |
| **Classe**         | `cy.get('.btn-primary')`          | Melhor que tag, mas pode mudar |
| **ID**             | `cy.get('#login')`                | Bom se IDs forem únicos        |
| **Atributo**       | `cy.get('[type="submit"]')`       | Útil quando não há ID fixo     |
| **Texto**          | `cy.contains('Login')`            | Quando o texto é fixo          |
| **Hierárquico**    | `cy.get('ul li').eq(2)`           | Navegar dentro de listas       |
| **Pseudo-classes** | `cy.get('input:checked')`         | Checkbox, estados              |
| **Data Attribute** | `cy.get('[data-cy="btn-login"]')` | **Mais confiável**             |
```