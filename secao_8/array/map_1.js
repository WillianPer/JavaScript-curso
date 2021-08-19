const numeros = [1, 2, 3, 4, 5]

// For com propósito
const resuldadoEmDobro = numeros.map(function (e){
    return e * 2
})

console.log(resuldadoEmDobro)

const soma10 = e => e + 10
const triplo = e => e * 3
const converteParaReal = e => `R$ : ${parseFloat(e).toFixed(2).replace(".", ",")}`

const resuldado = numeros.map(soma10).map(triplo).map(converteParaReal)
console.log(resuldado)