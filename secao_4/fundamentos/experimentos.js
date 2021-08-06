let a=3

global.b = 123

this.a = 456
this.b = false
this.c = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.export.c)
console.log(module.export === this)
console.log(module.export)

//criando uma variavel maluca sem var ou let
abc = 3 // não faça isso
// module.export = {c: 456, d: false, e: 'teste' }
