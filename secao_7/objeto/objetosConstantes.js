// pessoa -> 123 -> {...}
const pessoa = {nome : "João"}
pessoa.nome = "pedro"
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome : "Carlos"}

Object.freeze(pessoa)
pessoa.nome = "Carlos"
pessoa.endereco = "Rua Maria"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome : "João"})
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)