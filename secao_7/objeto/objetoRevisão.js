// coleção dinâmica de pares chave/valor
const produto = new Object
produto.name = "Cadeira"
produto["marca do produto"] = "genérica"
produto.preco = 280

console.log(produto)
delete produto.preco
delete produto["marca do produto"]
console.log(produto)


const carro = {
    modelo : "A4",
    preco : 89000,
    proprietario : {
        nome : "Raul",
        idade : 32,
        endereco : {
            logradouro : "Rua ABC",
            numero : 129
        }
    },
    condutores : [{
        nome : "junior",
        idade : 21
    },{
        nome : "Ana",
        idade : 27
    }],
    calcularValorDoSeguro : function () {
        // ...
    }
}


carro.proprietario.endereco.numero = 1000
carro["proprietario"]["endereco"]["logradouro"] = "Av : Gigante"
console.log(carro)

//delete carro.condutores
delete carro["proprietario"].endereco
delete carro.calcularValorDoSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)