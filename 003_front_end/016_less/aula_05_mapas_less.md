## O que é um map no LESS?
- No LESS, os mapas (maps) são estruturas de dados que funcionam de forma parecida com objetos em JavaScript ou dicionários em outras linguagens.
- Eles permitem que você armazene pares chave → valor e depois acesse ou reutilize esses valores dinamicamente no seu código.
- Um mapa é como uma "tabela de valores" que você cria para organizar informações (cores, tamanhos, espaçamentos, etc).
- Ele é definido dentro de chaves {}.
### Exemplo simples:
````
@cores: {
  primario: blue;
  secundario: green;
  alerta: red;
};
````
- Aqui criamos um map chamado @cores que guarda três cores.

## Como acessar os valores de um map?
- Você usa extract() ou a notação com colchetes.
### Usando extract():
````
.caixa {
  background-color: extract(@cores, primario);
}
````
#### CSS gerado:
````
.caixa {
  background-color: blue;
}
````
### Usando notação de colchetes:
````
.botao {
  color: @cores[secundario];
}
````
#### CSS gerado:
````
.botao {
  color: green;
}
````
## Vantagens de usar maps no LESS
- Organização → você agrupa valores relacionados em uma só variável.
- Reutilização → não precisa repetir a mesma informação em vários lugares.
- Manutenção → muda o valor em um só lugar e afeta todos os usos.

## Exemplo prático de tema com mapas
````
@tema: {
  fundo: #f4f4f4;
  texto: #333;
  destaque: #ff6600;
};

body {
  background: @tema[fundo];
  color: @tema[texto];
}

button {
  background: @tema[destaque];
  color: white;
}
````
### CSS gerado:
````
body {
  background: #f4f4f4;
  color: #333;
}

button {
  background: #ff6600;
  color: white;
}
````

## Resumindo:
- Mapas no LESS = coleções de valores organizados em chave → valor.
- Servem para criar temas, paletas de cores, tabelas de espaçamento e muito mais.
- Você acessa os valores com @mapa[chave] ou extract(@mapa, chave).