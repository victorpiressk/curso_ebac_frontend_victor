## O que é Jest?
- Jest é um framework de testes em JavaScript/TypeScript criado pelo Facebook.
- É muito usado em projetos React porque é rápido, simples e já vem com várias funcionalidades integradas (como mocks, spies e snapshots).
- Ele é compatível com React Testing Library, que usamos para testar componentes de forma mais próxima da experiência do usuário.

## Instalação Jest
1. Crie um projeto React com Vite ou CRA.
2. Instalar motor de testes Jest: ``npm install --save-dev jest``
3. Instalar dependências de tipagem do TypeScript: ``npm install --save-dev @types/jest``
4. Instalar dependências de leitura de arquivos TS: ``npm install --save-dev ts-jest``

### Instalações complementares (para React)
Quando queremos testar componentes React, precisamos de mais alguns pacotes:
1. Instalar dependências de ferramentas para testar componentes React: ``npm install --save-dev @testing-library/react``
2. Instalar dependências de matchers adicionais para DOM: ``npm install --save-dev @testing-library/jest-dom``

## Configuração Jest
1. Configure o comando de teste no package.json:
```
"scripts": {
  "test": "jest"
}
```
2. Execute no terminal para rodar o teste: ``npm test``

### Baixar extenção do Jest no VS.
Caso já tenha, não é necessário seguir o passo a passo abaixo.
  1. Acessar a aba de extenções do VS
  2. Pesquisar por jest
  3. Instalar a extenção Jest - Orta (extenção não oficial)

## Estrutura típica de testes
- Os testes normalmente ficam na pasta ``__tests__`` ou junto do componente.
- Extensão recomendada: ``.test.tsx`` ou ``.spec.tsx.``

Exemplo:
```
src/
  components/
    Button.tsx
    Button.test.tsx
```

## Escrevendo o primeiro teste com Jest
### Componente ``Button.tsx``
```
import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

### Teste ``Button.test.tsx``
```
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  it("renderiza o texto corretamente", () => {
    render(<Button label="Clique aqui" onClick={() => {}} />);
    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });

  it("chama a função ao clicar", () => {
    const mockFn = jest.fn();
    render(<Button label="Enviar" onClick={mockFn} />);

    fireEvent.click(screen.getByText("Enviar"));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
```

## Recursos úteis do Jest
### Matchers comuns:
```
expect(2 + 2).toBe(4);            // igualdade
expect(value).toBeNull();         // null
expect(value).toBeTruthy();       // truthy
expect(array).toContain("item");  // contém item
expect(fn).toHaveBeenCalled();    // chamada de função
```

### Mocks:
```
const mockFn = jest.fn();
mockFn("oi");
expect(mockFn).toHaveBeenCalledWith("oi");
```

### Snapshots (útil em React):
```
it("snapshot do botão", () => {
  const { asFragment } = render(<Button label="Teste" onClick={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
```

## Resumo rápido:
- Jest = framework de testes.
- Para React, usamos junto com ``@testing-library/react``.
- Estrutura: criar arquivos .test.tsx ao lado do componente.
- Principais recursos: matchers, mocks e snapshots.