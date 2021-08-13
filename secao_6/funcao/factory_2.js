function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto("NoteBook", 2600.00))
console.log(criarProduto("Ipad", 1860.00))