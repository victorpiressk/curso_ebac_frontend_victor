## Testes End-to-End (E2E) com Cypress
### O que é Cypress?
- É um framework de testes E2E usado para simular a experiência real do usuário no navegador.
- Diferente do Jest/RTL (que testam componentes isolados), o Cypress testa fluxos completos da aplicação.
- Exemplo: usuário acessa a página, faz login, adiciona item no carrinho e finaliza a compra.

## Configuração Cypress
1. Instalação do pacote: ``npm install --save-dev cypress`` Ou pacote visto em aula: ``npm install --save-dev cypress@12.6.0``
2. Configuração script cypress no arquivo ``pakage.json``:
```
"scripts": {
    "cypress": "cypress",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
3. Comando para inicializar o Cypress: ``npm run cypress open``

## Teste inicial Cypress
Após o comando para inicializar o Cypress abre um programa com duas opções:
1. E2E Testing - Configured
2. Component Testing - Not configured

### E2E Testing
1. Escolher um navegador para abrir as aplicações do Cypress.
2. Iniciar os testes predefinidos da ferramenta.
3. Cypress cria uma estrutura assim:
```
cypress/
    downloads/
    e2e/
        exemplo.cy.ts      # testes E2E ficam aqui
    fixtures/            # dados mockados
    support/             # configs globais
```

### Component Testing
- Permite testar componentes React isolados dentro do navegador.
- Diferente do E2E, aqui o foco é um único componente (ex: botão, formulário, modal).
- Útil para validar props, eventos e renderização visual.

Passo a passo:
1. Escolher o framework de atuação. Ex: Create React App
2. Se for a primeira vez, o Cypress vai pedir para configurar o adaptador do React.
3. Instale a dependência: ``npm install --save-dev @cypress/react18``
4. O Cypress cria (ou você cria manualmente) uma pasta dedicada:
```
cypress/
  component/
    Button.cy.tsx   # testes de componentes
```