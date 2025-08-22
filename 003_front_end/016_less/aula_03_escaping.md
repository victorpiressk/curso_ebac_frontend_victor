## O que é escaping no less
#### O escaping no LESS é um recurso que permite escrever valores literais dentro do código LESS sem que o compilador tente interpretá-los como variáveis, seletores ou expressões do próprio LESS.
- O compilador LESS é "inteligente" e tenta interpretar tudo como código LESS.
- Mas às vezes você precisa inserir strings brutas, expressões CSS nativas ou até código de terceiros (como calc(), hacks ou variáveis CSS nativas var(--x)), e o LESS poderia confundir isso.
- É aí que entra o escaping, feito com ~"conteúdo".
### Exemplo 1 – Usando calc() sem erro
- Se você escrever diretamente:
````
.box {
  width: calc(100% - 20px);
}
````
- O LESS pode tentar calcular 100% - 20px, o que não faz sentido.

#### Com escaping:
````
.box {
  width: ~"calc(100% - 20px)";
}
````
- O compilador vai ignorar e mandar o código literal para o CSS.
### Exemplo 2 – Usando variáveis CSS nativas
````
@cor: red;

.box {
  color: ~"var(--minha-cor, @cor)";
}
````
- O LESS não vai confundir o var(--minha-cor, @cor) com algo que ele deveria processar.

### Exemplo 3 – Inserindo hacks ou strings especiais
````
.box {
  content: ~'"Hello World!"';
}
````
## Resumindo:
- Sem escaping → LESS tenta interpretar o valor.
- Com escaping (~"texto") → LESS não interpreta, apenas insere o conteúdo no CSS final.