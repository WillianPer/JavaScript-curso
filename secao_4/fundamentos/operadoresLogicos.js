function compras( trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    // const coprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unario

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log("1ª", compras(true, true))
console.log("2ª", compras(true, false))
console.log("3ª", compras(false, true))
console.log("4ª", compras(false, false))