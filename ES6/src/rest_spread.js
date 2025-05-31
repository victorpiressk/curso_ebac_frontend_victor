//forma padrão

function somarPadrao(a, b) {
    return a + b;
}

console.log(somarPadrao(10, 20))

// arguments

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20, 30, 40, 50))

// rest

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30, 40, 50))

// spread

const numeros = [1,2,3,4]
console.log(...numeros)

const timesSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesRj = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// const times = timesSp.concat(timesRj);
const times = [...timesSp, ...timesRj]

console.log(times)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaJulia)
console.log(carroDaAna)

// desestruturção

// padrão - const motorCarroAna = carroDaAna.motor;

const {motor: motorCarroAna} = carroDaAna;
const {motor: motorCarroJulia} = carroDaJulia;

console.log(motorCarroAna)
console.log(motorCarroJulia)

const [time1, time2, time3, ...outrosTimes] = times;

console.log(time1)
console.log(time2)
console.log(time3)
console.log(outrosTimes)

