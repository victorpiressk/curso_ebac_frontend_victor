## Tipos costumizados
- No TypeScript, além dos tipos básicos (string, number, boolean, etc.), você pode criar seus próprios tipos para deixar o código mais organizado, reutilizável e fácil de entender.

### 1. Type Alias
- Um apelido de tipo criado com a palavra-chave ``type``.
```
type Usuario = {
  nome: string;
  idade: number;
  ativo?: boolean;
};

const usuario1: Usuario = {
  nome: "Victor",
  idade: 30,
  ativo: true,
};

const usuario2: Usuario = {
  nome: "Gabriel",
  idade: 28,
};
```
- Aqui, criamos o tipo Usuario e usamos ele como se fosse um tipo nativo.
- A uilização da ? após o nome da propriedade indica que a propriedade é opcional.

### 2. Union Types (|)
- Permite que um valor seja de mais de um tipo.
```
type ID = number | string;

let usuarioID: ID;

usuarioID = 101;      // válido
usuarioID = "abc123"; // válido
```
- ``ID`` pode ser número ou string.

### 3. Intersection Types (&)
- Combina múltiplos tipos em um só.
```
type Pessoa = { nome: string };
type Funcionario = { salario: number };

type PessoaFuncionario = Pessoa & Funcionario;

const joao: PessoaFuncionario = {
  nome: "João",
  salario: 5000,
};
```
- PessoaFuncionario precisa ter todas as propriedades de Pessoa e Funcionario.