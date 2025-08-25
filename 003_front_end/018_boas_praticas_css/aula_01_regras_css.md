## Especifidades CSS
- O CSS utiliza uma hierarquia para decidir qual regra tem prioridade quando várias regras afetam o mesmo elemento.
- Essa hierarquia é chamada de especificidade.
### Ordem de especifidade
- 1. !important 
- 2. CSS inline
- 3. IDs e Classes
- 4. Tags
### !important
- Força a regra a ter prioridade máxima (mesmo sobre inline styles).
#### Exemplo:
```
p {
  color: red !important;
}
```
### CSS Inline
- Regras escritas diretamente no elemento HTML.
#### Exemplo:
```
<p style="color: blue;">Texto</p>
```
### IDs e Classes
- Seletores que utilizam #id.
#### Exemplo:
```
#titulo {
  color: green;
}
```
- Seletores como .classe, [atributo], :hover, :focus, etc.
#### Exemplo:
```
.botao {
  background: orange;
}
```

### Tags
- Seletores como div, p, h1, ::before, ::after.

#### Exemplo:
```
p {
  font-size: 16px;
}
```

## Exemplo prático
```
<p id="texto" class="destaque">Olá Mundo</p>
```
```
p { color: black; }              /* prioridade menor */
.destaque { color: blue; }       /* classe tem mais força */
#texto { color: green; }         /* ID tem mais força ainda */
p#texto.destaque { color: red; } /* combinação ainda mais específica */
```
- Resultado final → O texto ficará vermelho, porque a regra mais específica foi aplicada.

## Regras adicionais
- Empate na especificidade → vale a última regra lida pelo navegador (ordem do CSS importa).
- Evite usar !important → use apenas em casos de exceção.
- Escreva seletores claros → facilita manutenção do código.