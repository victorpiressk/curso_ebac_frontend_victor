## O que é Atomic Design?
- O Atomic Design é uma metodologia criada por Brad Frost para organizar e estruturar interfaces de forma escalável e reutilizável. Ele é muito usado em projetos React, porque React já incentiva a componentização.
- A ideia é dividir os componentes em níveis de granularidade, do mais simples ao mais complexo, como se fossem moléculas em biologia.

## Os níveis são:
- **Átomos** → Os elementos mais básicos (botões, inputs, ícones, cores, tipografia).
- **Moléculas** → Conjunto de átomos funcionando juntos (ex: campo de busca = input + botão).
- **Organismos** → Conjuntos de moléculas/átomos que formam uma seção mais complexa (ex: navbar, formulário de login).
- **Templates** → Estrutura de página, onde os organismos são organizados (layout com header, sidebar, conteúdo, footer).
- **Páginas** → Instâncias finais do template com conteúdo real (ex: Página inicial, Página de produto).

## Estrutura de pastas em React com Atomic Design
Um projeto React seguindo Atomic Design poderia ter a seguinte organização:
```
src/
 └── components/
      ├── atoms/
      │    ├── Button/
      │    │   ├── Button.tsx
      │    │   └── styles.ts
      │    └── Input/
      │        ├── Input.tsx
      │        └── styles.ts
      │
      ├── molecules/
      │    └── SearchBar/
      │        ├── SearchBar.tsx
      │        └── styles.ts
      │
      ├── organisms/
      │    └── Header/
      │        ├── Header.tsx
      │        └── styles.ts
      │
      ├── templates/
      │    └── MainLayout.tsx
      │
      └── pages/
           ├── Home.tsx
           └── Product.tsx
```

## Import/export no Atomic Design
- Cada componente fica isolado em sua pasta com seu arquivo principal (.tsx ou .jsx) e estilos.
- Para usar um átomo (ex: Button) em uma molécula (SearchBar), basta importar:
```
import Button from "../atoms/Button"
import Input from "../atoms/Input"

const SearchBar = () => (
  <div>
    <Input placeholder="Pesquisar..." />
    <Button>Buscar</Button>
  </div>
)

export default SearchBar
```

## Resumo:
- O Atomic Design ajuda a organizar a componentização em React.
- Vai de átomos → páginas em níveis de complexidade.
- Melhora reutilização, manutenção e escalabilidade do projeto.