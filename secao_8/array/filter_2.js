Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome : "NoteBook", preco : 2400, fragil : true},
    { nome : "Ipad", preco : 4900, fragil : true},
    { nome : "Copo de vidro", preco : 20.00, fragil : true},
    { nome : "Copo de plastico", preco : 12.00, fragil : false}
]



const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter2(caro).filter2(fragil))