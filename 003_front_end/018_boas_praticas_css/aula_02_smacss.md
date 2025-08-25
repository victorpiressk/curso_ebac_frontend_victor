## O que é a metodologia SMACSS?
- SMACSS (Scalable and Modular Architecture for CSS) é uma metodologia criada por Jonathan Snook.
- O objetivo é organizar e estruturar o CSS de forma modular e escalável, facilitando a manutenção de projetos grandes.
- Ela propõe uma forma de categorizar os estilos em diferentes tipos de regras, deixando o código mais limpo e reaproveitável.

## Categorias do SMACSS
### 1. Base (Base Rules)
- Regras globais aplicadas a elementos HTML.
- Normalmente sem classes ou IDs.
#### Exemplo:
```
body {
  font-family: Arial, sans-serif;
  color: #333;
}

h1, h2, h3 {
  margin: 0;
}
```

### 2. Layout (Layout Rules)
- Define a estrutura principal da página.
- Geralmente envolve grids, cabeçalhos, rodapés, colunas.
- Costuma usar classes específicas para dividir grandes áreas do site.
#### Exemplo:
```
.header {
  background: #f4f4f4;
  padding: 20px;
}

.sidebar {
  float: left;
  width: 25%;
}

.content {
  float: right;
  width: 70%;
}
```

### 3. Module (Module Rules)
- Estilos para componentes reutilizáveis.
- Exemplo: botões, cards, menus, formulários.
#### Exemplo:
```
.btn {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
}

.btn-primary {
  background: blue;
  color: white;
}
```

### 4. State (State Rules)
- Define estados diferentes de elementos (ativo, escondido, carregando, etc.).
- Normalmente usa prefixo como .is- ou .has-.
#### Exemplo:
```
.is-hidden {
  display: none;
}

.is-active {
  background: yellow;
}
```

### 5. Theme (Theme Rules) (opcional)
- Regras para estilização visual de temas diferentes.
- Útil em sites que possuem versões de cor ou estilo (ex: dark mode).
#### Exemplo:
```
.theme-dark {
  background: #111;
  color: #eee;
}

.theme-light {
  background: #fff;
  color: #333;
}
```

## Vantagens do SMACSS
- Organização modular e escalável.
- Código CSS mais fácil de manter e entender.
- Facilita a reutilização de componentes.
- Ajuda a evitar conflitos entre estilos.