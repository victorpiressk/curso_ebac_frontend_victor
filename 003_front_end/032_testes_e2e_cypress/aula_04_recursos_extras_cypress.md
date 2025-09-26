## Recursos Extras do Cypress
### 1. Rodar testes em modo Headless (cypress run)
- O comando padrão roda o Cypress sem abrir o navegador interativo.
- Útil em CI/CD ou quando não precisamos assistir os testes.
```
npm run cypress run
```

### 2. Visualizar Prints e Vídeos
Por padrão, quando usamos cypress run, o Cypress:
- Faz screenshots em caso de falha.
- Gera vídeos da execução.

Estrutura padrão criada:
```
cypress/
  screenshots/   # imagens capturadas
  videos/        # gravações dos testes
```
Basta abrir esses arquivos localmente para analisar o que deu errado.

### 3. Fazer Screenshot manualmente
Podemos capturar screenshots a qualquer momento do teste:
```
cy.screenshot() // captura a tela inteira
cy.get('form').screenshot() // captura só o formulário
```

Podemos passar nome personalizado:
```
cy.screenshot('formulario-preenchido')
```

### 4. Gerar Relatórios no Cypress
- Por padrão, o Cypress exibe relatórios no terminal.
- Se quiser relatórios em HTML, JSON, JUnit etc., é preciso instalar reporters.

Exemplo com Mochawesome

1. Instale: ``npm install --save-dev mochawesome``
2. Configure no ``cypress.config.ts``:
```
import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio',
    overwrite: true, // true sobrescreve os relatórios existentes e false cria novos relatórios 
    html: true,
    json: false // Digite true caso queira relatórios json
    timestamp: 'ddmmyyyy_HHMMss' // Os nomes dos relatórios teram data e horario de quando foram gerados
  }
})
```
3. Rodar os testes gerando o relatório:
```
npm run cypress run --reporter mochawesome
```
4. Abrir o(s) arquivo(s) HTML dentro da pasta ``relatorio/`` com o live-server.

## Resumo
- **cypress run** → executa testes em modo headless.
- **Prints e vídeos** → salvos automaticamente em cypress/screenshots e cypress/videos.
- ``cy.screenshot()`` → captura manual de tela.
- **Relatórios** → integrar com Mochawesome ou outros reporters para HTML, JSON, etc.