// Função em JS é First_Class Object (Citizens)
// Higher_Order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variavel
const fun2 = function() {}

// Armazenar em uma Array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0] ( 9, 3))

// Armazenar em atributo de Objeto
const obj = {}
obj.falar = function(){ return "Epa" }
console.log(obj.falar())

// passando função como parãmetro
function run(fun){
    fun()
}

run(function(){console.log("Executando ...")})

// Uma função pode retornar e conter uma função
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}
soma (2, 3) (4)
const cincoMais = soma(2, 3)
cincoMais(4)