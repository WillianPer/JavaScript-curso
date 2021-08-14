// Usando a notação literal de objeto
const objeto1 = {}
console.log(objeto1)

// Object em JS
console.log(typeof Object,typeof new Object)
const objeto2 = new Object
console.log(objeto2)

// Funções contrutoras
function produto (nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const preco1 = new produto ("Caneta", 7.45, 0.25)
const preco2 = new produto ("Notebook", 2999, 0.13)
console.log(preco1.nome, preco2.nome)
console.log(preco1.getPrecoComDesconto(), preco2.getPrecoComDesconto())

// Função Factory
function criarFuncionario (nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario () {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const funcionarioSalario1 = criarFuncionario("Thiago", 7980, 4)
const funcionarioSalario2 = criarFuncionario("Fernanda", 11400, 1)
console.log(`${funcionarioSalario1.nome} : ${funcionarioSalario1.getSalario()} \n${funcionarioSalario2.nome} : ${funcionarioSalario2.getSalario()}`)

// Object.create

const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info" : "Eu sou um JSON"}')
console.log(fromJSON.info)

