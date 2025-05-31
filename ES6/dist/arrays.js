"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; // true ou false
});
console.log(paula);
var indicePaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula'; // true ou false
});
console.log(indicePaula);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  numeroAtual = numeroAtual * 2;
  return numeroAtual;
});
console.log(dobroDosNumeros);

//every
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontend);
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend';
});
console.log(existeAlgumAlunoDeBackend);
var alunosDeBackend = alunos2.filter(function (item) {
  return item.curso === 'Backend';
});
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomeDosAlunos);