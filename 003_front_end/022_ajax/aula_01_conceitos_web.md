## URL - Uniform Resource Locator:
### Exemplo de site: ``https://meusite.com.br/produtos?marca=nike&tamanho=39``
- Base URL (domínio): ``https://meusite.com.br ``
- Recurso: ``/produtos``
- Query parameters (parametros): ``?marca=nike&tamanho=39``
- Exemplo de subdomínios: ``https://admin.meusite.com.br ``, ``https://loja.meusite.com.br `` e ``https://cliente.meusite.com.br ``

## HTTP - Hypertext transfer protocol
- HTTP significa HyperText Transfer Protocol (Protocolo de Transferência de Hipertexto).
- É o protocolo de comunicação usado na web para trocar dados entre cliente (navegador) e servidor.

### Em outras palavras:
- Quando você acessa um site, seu navegador (cliente) envia uma requisição HTTP para o servidor.
- O servidor responde com uma resposta HTTP (que pode ser uma página HTML, uma imagem, um arquivo JSON, etc.).

### O processo básico segue esse fluxo:
1. **Requisição:** Cliente → Servidor: O navegador envia uma requisição (ex: GET /index.html HTTP/1.1).
2. **Resposta:** Servidor → Cliente: O servidor processa a requisição e responde (ex: status 200 OK + conteúdo HTML).

### Uma requisição HTTP é composta por:
- Método/verbo: GET, POST, PUT, PATCH, DELETE
- headers/cabeçalhos: Dados referentes a requisição
- body (opcional): Dados adicionais da requisição

### Os principais métodos HTTP:
- GET: Utilizado para solicitar um dado do servidor (ex: Solicitar Listagem de produtos)
- POST: Utilizamos para enviar dados para o servidor (ex: Enviar cadastros de sites)
- PUT: Utilizamos para alterar todos os dados de uma informação (ex: Alterar dados de um perfil de rede social)
- PATCH: Utilizado para alterar parcialmente os dados de uma informação
- DELETE: Utilizamos para deletar os dados

### Uma resposta HTTP é composta por:
- status code: Código numérico informando qual o status da requisição
- headers/cabeçalhos: Dados referentes a resposta
- body (opcional): Dados adicionais da requisição

### Status codes - intervalos:
- 100 – 199: indica um status de informação
- 200 – 299: indica um status de sucesso
- 300 – 399: indica um status de redirecionamento
- 400 – 499: indica um status de erro por parte do cliente
- 500 – 599: indica um erro por parte do servidor

#### **OBS:**
- Os status codes mais comuns estão em 2XX, 4xx e 5XX.
- **Exemplos:** Quando solicitamos um recursos que não existe ao servidor recebemos um status code 404, que indica um erro por parte do cliente, do solicitante.

## JSON - JavaScript Object Notation:
- JavaScrip na estrutura: Conjunto chave-valor
```
{
    "chave/propriedade": "valor"
}

ex:
{
    "nome": "Victor Pires"
}
```
- Os dados enviados e recebidos pelo HTTP seguem essa estrutua e podem ser analizados na opção "rede" do inspecinar no navegador.

## API Rest
### API - Application Programming Interface:
- Interface para integração entre sistemas.
- Uma API é um conjunto de regras e padrões que permite que diferentes sistemas ou aplicações conversem entre si.
- Pense nela como um cardápio de restaurante: você (cliente) escolhe no cardápio (API) o que quer, e a cozinha (servidor) entrega o prato (resposta).

### REST - Representational State Transfer:
- Um jeito de construir APIs simples, padronizadas e baseadas em HTTP.
- É um estilo de arquitetura para criar APIs.
- Ele usa os métodos do HTTP (GET, POST, PUT, DELETE) para realizar operações em recursos.

### Má prática:
#### Criar rotas diferentes para cada tipo de solicitação:
- https://meusite.com/produtos
- https://meusite.com/produtos/novo
- https://meusite.com/produtos/editar
- https://meusite.com/produtos/deleta

### Boa prática:
#### Utilizar os métodos para realizar as solicitações, mantendo a mesma rota:
- GET - https://meusite.com/produtos 
- POST - https://meusite.com/produtos 
- PUT - https://meusite.com/produtos 
- DELETE - https://meusite.com/produtos