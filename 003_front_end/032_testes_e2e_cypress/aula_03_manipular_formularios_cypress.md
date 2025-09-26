## Manipulação de Formulários com Cypress
### 1. Campos de Texto (input, textarea)
Digitar valores
```
cy.get('input[name="username"]').type('victor')  
cy.get('textarea[name="mensagem"]').type('Olá, Cypress!')
```

Limpar antes de digitar
```
cy.get('input[name="username"]').clear().type('novoUsuario')
```

Digitar com teclas especiais
```
cy.get('input[name="busca"]').type('produto{enter}') // Digita e pressiona Enter
```

### 2. Checkbox
Marcar
```
cy.get('input[type="checkbox"]').check()
cy.get('input[type="checkbox"][value="aceito"]').check()
```

Desmarcar
```
cy.get('input[type="checkbox"]').uncheck()
```

Marcar múltiplos
```
cy.get('input[type="checkbox"]').check(['opcao1', 'opcao2'])
```

### 3. Radio Button
Selecionar uma opção
```
cy.get('input[type="radio"][value="masculino"]').check()
cy.get('input[type="radio"]').first().check() // Seleciona o primeiro
```

### 4. Select (Dropdown)
Selecionar por texto visível
```
cy.get('select').select('Opção 1')
```

Selecionar por valor
```
cy.get('select').select('valor1')
```

Selecionar múltiplos (se permitido)
```
cy.get('select[multiple]').select(['valor1', 'valor2'])
```

### 5. Botões
Clicar
```
cy.get('button[type="submit"]').click()
```

Clicar forçado (quando está sobreposto)
```
cy.get('button#enviar').click({ force: true })
```

### 6. Upload de Arquivos
1. Instalar plugin: ``npm install --save-dev cypress-file-upload``
2. No ``cypress/support/commands.ts`` adicionar importacão: ``import 'cypress-file-upload';``

Exemplo de uso:
```
cy.get('input[type="file"]').attachFile('exemplo.pdf')
```

### 7. Submissão do Formulário
Usando o botão
```
cy.get('form').submit()
```

Usando Enter em um campo
```
cy.get('input[name="senha"]').type('123456{enter}')
```

### 8. Disparando eventos adicionais
```
cy.get('input[name="email"]').focus()   // Focar no campo
cy.get('input[name="email"]').blur()    // Tirar o foco
cy.get('input[name="email"]').invoke('val', 'teste@teste.com') // Definir valor diretamente
```

## Resumo dos Comandos
```
| Elemento       | Comandos principais                          |
| -------------- | -------------------------------------------- |
| **Texto**      | `.type()`, `.clear()`, `.type('{enter}')`    |
| **Textarea**   | `.type()`, `.clear()`                        |
| **Checkbox**   | `.check()`, `.uncheck()`                     |
| **Radio**      | `.check()`                                   |
| **Select**     | `.select('texto')`, `.select('valor')`       |
| **Botão**      | `.click()`, `.click({force:true})`           |
| **Arquivo**    | `.attachFile()`                              |
| **Formulário** | `.submit()`                                  |
| **Eventos**    | `.focus()`, `.blur()`, `.invoke('val', ...)` |
```
