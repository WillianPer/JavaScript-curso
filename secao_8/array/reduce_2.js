const alunos = [
    {nome : "João", nota : 7.3, bolsista : false},
    {nome : "Maria", nota : 9.2, bolsista : true},
    {nome : "Pedro", nota : 9.8, bolsista : false},
    {nome : "Ana", nota : 8.7, bolsista : true}
]

// Desafio 1 : Todos os alunos são bolsistas ?
const todosOsBolsistas = (resultado, bolsistas) => resultado && bolsistas
console.log(alunos.map(a => a.bolsista).reduce(todosOsBolsistas))

// Desafio 2 : Algum aluno é bolsista ?
const algumBolsistas = (resultado, bolsistas) => resultado || bolsistas
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))