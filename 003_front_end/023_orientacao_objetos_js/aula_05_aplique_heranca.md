## Criar uma herança
- Priemiro criamos a função construtora
```
function Pessoa(nome) {
    this.nome = nome
    this.dizOi = function() {
        console.log(this.nome + " diz olá")
    }
}
```
- Também criamos um nova função construtora, mas adicionando a função call()
- Assim atribuimos uma herança a segunda função construtora que herdará os atributos da primeira função
```
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo
    this.salario = salario

    Pessoa.call(this, nome)
}
```
- Depois criamos a instancia da segunda função
```
const funcionario1 = new Funcionario("Maria", "dev front-end", 5000)

funcionario1.dizOi()
console.log(funcionario1)
```
## Acessar atributos da herança na função construtora primária
- Criamos um método que irá acessar os atributos da herança
```
function Pessoa(nome) {
    this.nome = nome
    this.diOi = function() {
        console.log(this.nome + " diz olá")
    }

    this.dizCargo = function() {
        console.log(this.cargo)
    }
}

funcionario1.dizCargo()
```
- Mesmo que esses atributos não estejam na função contrutora, eles são acessiveis por conta da herança
- Mas, para evitar confusão no código, é importante que cada método esteja dentro de sua própria função construtora