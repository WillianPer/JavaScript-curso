const escola = [{
    nome : "Turma M1",
    alunos : [{
        nome : "Pedro",
        nota : 9.2
    }, {
        nome : "Ana",
        nota : 9.3
    }]

}, {
    nome : "Turma M2",
    alunos : [{
        nome : "Rebeca",
        nota : 8.7
    }, {
        nome : "Thiago",
        nota : 9.7
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasdaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasdaTurma)

console.log(notas1)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasdaTurma)
console.log(notas2)