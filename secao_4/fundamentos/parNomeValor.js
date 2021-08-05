// par nome/valor

const saudacao = "Opa!!" // contexto lexico 1   # contexto Global

function exec () {
    const saudacao = 'Fala!!!' // Contexto léxico 2  # Contexto Local
    return saudacao
}

// Objetos são grupos aninhados de pares nome(chave)/valor
const cliente = {
    nome : "Pedro",
    idade : 25,
    peso : 64,
    endereco : {
        logradouro : "Rua Grosópio",
        numero : 10
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)