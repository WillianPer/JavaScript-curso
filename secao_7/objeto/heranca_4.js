function MeuObjeto () {}
console.log(MeuObjeto.prototype)

const objeto1 = new MeuObjeto
const objeto2 = new MeuObjeto

console.log(objeto1.__proto__ === objeto2.__proto__)
console.log(MeuObjeto.prototype === objeto2.__proto__)

MeuObjeto.prototype.nome = "Anonimo"
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

objeto1.falar()

objeto2.nome = "Rafael"
objeto2.falar()

const objeto3 = {}
objeto3.__proto__ = MeuObjeto.prototype
objeto3.nome = "Obj3"
objeto3.falar()

// Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)