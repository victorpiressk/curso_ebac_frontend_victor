// Aula 5

function Pessoa(nome) {
    this.nome = nome
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}


function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome);

    this.dizCargo = function() {
        console.log("O funcionário(a) " + this.nome + " é " + this.cargo);
    }

    this.dizSalario = function() {
        console.log("Seu salário é de " + this.salario);
    }
}

const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);

funcionario1.dizOi();
funcionario1.dizCargo();
funcionario1.dizSalario();