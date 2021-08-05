// Armazenando função em Variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(3, 2)

// Armazenando um função Arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(3, 4))

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 6))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")