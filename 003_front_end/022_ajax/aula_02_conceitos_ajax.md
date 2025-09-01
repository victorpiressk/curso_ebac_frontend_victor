## O que é AJAX?
- AJAX significa Asynchronous JavaScript and XML.
- É uma técnica (não é uma linguagem ou biblioteca) usada no JavaScript para enviar e receber dados de um servidor sem precisar recarregar toda a página.

## Como funciona
### Antes do AJAX:
- Cada vez que você precisava de novos dados (ex: carregar comentários, trocar de página, etc.), o navegador fazia um reload completo da página.

### Com AJAX:
- O JavaScript faz uma requisição em segundo plano para o servidor (via HTTP/HTTPS).
- O servidor responde (com JSON, XML, HTML ou outro formato).
- O JavaScript atualiza apenas a parte necessária da página, sem recarregar tudo.

## Exemplo prático
- Imagina um site de busca. Quando você digita no campo de pesquisa, os resultados aparecem em tempo real, sem recarregar a página. Isso é AJAX em ação.

## Como usar
### Existem algumas formas de usar AJAX no JavaScript:

1. Com XMLHttpRequest (mais antigo):
```
const xhr = new XMLHttpRequest(); 
xhr.open("GET", "https://api.exemplo.com/dados");
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```

2. Com fetch (moderno e mais usado):
```
fetch("https://api.exemplo.com/dados")
  .then(function(resposta) {
    return resposta.json()
  })
  .then(function(json) { // O then nesse caso faz a mesma função do try (tentar executar o código)
    const dados1 = json.dados1
  })
  .catch(function(error) { // Em caso de erro o catch servirá para notificar o erro
    console.error("Erro:", error) // Para feedback visual ao usuário, usar o alert
  });
  .finally(function () { // O finally finaliza a execução para que o programa não fique rodando
    console.log(dados1)
  })
```

## Resumindo
- AJAX = técnica para atualizar partes da página sem reload.
- Usa JavaScript para se comunicar com o servidor em segundo plano.
- Hoje em dia é muito usado junto com APIs REST em JSON (o XML ficou bem menos comum).