## Sobre o DOM
- O DOM (Document Object Model) é uma interface pela qual o navegador nos disponibiliza acessar os elementos que compõem um documento.
- Através dele podemos, com o uso de JavaScript, manipular os elementos HTML e seus atributos.
- O DOM é acessível através do objeto window.document ou apenas document.
- Além do DOM o navegador nos disponibiliza dois outros objetos: history, onde podemos acessar e manipular o histórico de navegação e o objeto location, que nos possibilita acessar os dados da localização atual, como por exemplo, recuperar o endereço da página.

## Exemplos de comandos utilizando o DOM

### Location
- Recuperar a pagina atual -> window.location.href
- Recuperar dados que vem após o domínio da página -> window.location.pathname

### History
- Voltar para a página anterior do site -> window.history.back()

### Document
- Alterar titulo da página -> window.document.title = 'teste'
- Acessar/recuperar corpo da página -> window.document.body
- Alterar/adicionar dados ao corpo da página -> window.document.innerHTML = "<°p>Olá DOM</°p>"