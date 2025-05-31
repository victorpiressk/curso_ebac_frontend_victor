// Aula 2

const carroDoJoao = {
    modelo: 'Fiesta',
    frabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log("vruum");
    } 
}

const carroDoMaria = {
    modelo: 'Ka',
    frabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log("vruum");
    } 
}

function Carro(modelo, frabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.frabricante = frabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDoMaria2 = new Carro("Ka", "Ford", 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDoMaria2);

// Aula 3

const nome = "Victor"
const idade = 30
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
console.log(typeof carroDoMaria2);

console.log(carroDoJoao2 instanceof Carro);
console.log(conhecimentos instanceof Array);

// Aula 4

console.log(pessoa.nome)
console.log(pessoa['nome'])

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

pessoa.sobrenome = 'Pires';
// ou
pessoa['sobrenome'] = 'Pires';

if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobre nome")
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

console.log(Object.keys(pessoa));
console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));