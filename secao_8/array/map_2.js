const carrinho = [
    `{"nome" : "Borracha", "preco" : 3.45}`,
    `{"nome" : "Caderno", "preco" : 13.90}`,
    `{"nome" : "Kit de Lapis", "preco" : 41.22}`,
    `{"nome" : "Caneta", "preco" : 7.50}`
]

// Retornar um Array apenas com os preços

const passandoParaObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(passandoParaObjeto).map(apenasPreco)

console.log(resultado)