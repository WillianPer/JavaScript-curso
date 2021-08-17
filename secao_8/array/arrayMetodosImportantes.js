const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() //Massa quebrou o carro
console.log(pilotos)

pilotos.push("Verstappen")
console.log(pilotos)

pilotos.shift() // Remove o primeiro indice
console.log(pilotos)

pilotos.unshift("Hamilton")
console.log(pilotos)

// splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Massa quebrou o carro novamente
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Novo array gerado a partir do indice indicado até o indice final indicado
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)