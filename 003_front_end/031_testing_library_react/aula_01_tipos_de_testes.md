## React Testing Library (RTL)
- Quando usamos React Testing Library (RTL), os testes geralmente se dividem em tipos, de acordo com o objetivo do que queremos validar.
- Na prática, muita gente agrupa os testes em 3 grandes categorias

### 1. Testes Unitários
- Testam partes isoladas da aplicação (funções, hooks, componentes simples).
- São rápidos e fáceis de rodar.
- Costumam ser a base da pirâmide de testes.

**Exemplo**: verificar se um componente ``<Button>`` renderiza o texto passado via props.

### 2. Testes de Interação (ou de Integração)
- Testam como componentes interagem entre si e com o usuário.
- Usam simulações de clique, digitação, navegação (com @testing-library/user-event).
- São super importantes em React porque validam fluxos reais de uso.

**Exemplo**: simular o preenchimento de um formulário e garantir que a mensagem de sucesso aparece.

### 3. Testes End-to-End (E2E)
- Testam a aplicação de ponta a ponta (do frontend até a API/servidor, ou mocks dela).
- Reproduzem o que o usuário final faria, mas em um navegador real ou simulado.
- Mais lentos, mas garantem a funcionalidade completa.
- **Ferramentas comuns**: Cypress, Playwright, Selenium.

**Exemplo**: abrir a página de login, digitar usuário/senha e verificar se o redirecionamento para o dashboard funciona.

## Então, resumindo:
- **Unitários** → peças isoladas.
- **Interação** → comportamento entre partes + ações do usuário.
- **E2E** → fluxo real da aplicação como o usuário final veria.