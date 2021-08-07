const notas = [6.7, 7.4, 8.8, 8.1, 7.7]

for(let i in notas){
    console.log(`Posição ${i} Nota : ${notas[i]}`)
}

const pessoa = {
    nome : "Ana",
    sobrenome : "Santos",
    idade : 21,
    peso : 56

}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}