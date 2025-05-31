const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})

console.log(alunos2)

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' // true ou false
})

console.log(paula)

const indicePaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula' // true ou false
})

console.log(indicePaula)


const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual){
    numeroAtual = numeroAtual * 2;
    return numeroAtual;
})

console.log(dobroDosNumeros)

//every
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoDeFrontend);

const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso === 'Backend'
})

console.log(existeAlgumAlunoDeBackend);

const alunosDeBackend = alunos2.filter(function(item) {
    return item.curso === 'Backend'
})

console.log(alunosDeBackend);

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomeDosAlunos);