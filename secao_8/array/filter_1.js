const produtos = [
    { nome : "NoteBook", preco : 2400, fragil : true},
    { nome : "Ipad", preco : 4900, fragil : true},
    { nome : "Copo de vidro", preco : 20.00, fragil : true},
    { nome : "Copo de plastico", preco : 12.00, fragil : false}
]

console.log(produtos.filter(function(p) {
    return false
}))

console.log(produtos.filter(function(p) {
    //if()
    return p.fragil == true && p.preco > 2000
}))
console.log(produtos.filter(function(p) {
    if(p.fragil == true && p.preco > 2000){
        return p
    }
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))