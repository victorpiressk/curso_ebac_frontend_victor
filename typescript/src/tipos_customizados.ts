type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    nome: "Julia",
    cursos: ["Aquitetura"],
    idade: 29
})

const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}