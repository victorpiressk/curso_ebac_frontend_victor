## Tipos de unidades de medidas no CSS
### Unidades fixas
#### São fixas, não mudam conforme o tamanho da tela ou fonte.
- px → Pixels (mais usado para tamanhos precisos)
- cm → Centímetros
- mm → Milímetros
- in → Polegadas (1in = 2.54cm)
- pt → Pontos tipográficos (1pt = 1/72in)
- pc → Picas (1pc = 12pt)
### Unidades flexiveis
#### Relativas à Fonte
- em → Relativo ao tamanho da fonte do elemento pai. (1em = tamanho da fonte atual, ex: se for 16px, 2em = 32px)
- rem → Relativo ao tamanho da fonte raiz (html). (Independe do elemento pai)

#### Relativas ao Viewport
- vw → Percentual da largura da viewport (1vw = 1% da largura da tela)
- vh → Percentual da altura da viewport (1vh = 1% da altura da tela)
- vmin → Percentual do menor lado da viewport
- vmax → Percentual do maior lado da viewport

#### Outras Relativas
- % → Relativo ao tamanho do elemento pai.
- ex → Altura da letra "x" da fonte usada.
- ch → Largura do caractere "0" da fonte usada.