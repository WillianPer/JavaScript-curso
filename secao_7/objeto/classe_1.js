class Lancamento {
    constructor (nome = "Genérico", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinaceiro {
    constructor (mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamento ( ...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario () {
        let valorConsolidado = 0
        this.lancamentos.forEach( l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("salario", 45000)
const contaDeLuz = new Lancamento("Luz", -280)

const conta = new CicloFinaceiro(06, 2019)
conta.addLancamento(salario, contaDeLuz)
console.log(conta.sumario())