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