"use strict";
const alunos = [
    {
        nome: "carlos",
        cursos: ["front-end", "ux/ui"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["front-end", "Python"],
        idade: 27,
    },
];
alunos.push({
    nome: "Julia",
    cursos: ["Aquitetura"],
    idade: 29
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
