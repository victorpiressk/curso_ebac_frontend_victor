### Auterar posicionamento de um elemento
- seletor {
- posicion: valor;
- }

### Poscionamento absoluto
- É uma forma de posicionar um elemento de maneira exata na página, ignorando o fluxo normal do HTML. E para controlar sua posição, deve utilizar as propriedades: top, left, rigth ou botton.

#### Exemplo
- seletor {
- posicion: absolute;
- top: 0;
- left: 0;
- }

### Poscionamento relativo
- É uma forma de manter o posicionamento do seletor pai como referencia para o seletor filho. Assim, o seletor filho com posicionamento absoluto não ultrapassa o tamanho do posicionamento do seletor pai.
#### Exemplo
- seletor pai {
- posicion: relative;
- }
- seletor filho {
- posicion: absolute;
- top: 0;
- left: 0;
- }

### Poscionamento fixo
- É uma forma de manter o seletor em um posicionamento fixo em algum local da página, idenpendente da rolagem da tela, o seletor continuará no mesmo local.
#### Exemplo
- seletor {
- posicion: fixed;
- botton: 0;
- right: 0;
- }
#### Utilização
- Bom para propagandas que ficam fixas na tela ou contatos de suporte que acompanham a rolagem da página