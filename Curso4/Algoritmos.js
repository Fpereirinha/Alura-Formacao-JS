let lista = [1,55,11,22,44,9,9,0,0,0,2]
let lista_ordenada = []
// organizar sem repetir //
for (let i = 0; i < lista.length; i++) {
    let menor = 9999999999
    for (const number of lista) {
        if (number <= menor && ! lista_ordenada.includes(number)) {menor = number}
    }
    if (! lista_ordenada.includes(menor) && menor !== 9999999999){lista_ordenada.push(menor)}
}
console.log(lista_ordenada)
console.log(lista)
// organizar, repetindo//
let tamanho = lista.length
for (let i = 0; i < tamanho; i++) {
    let menor = lista[0]
    for (const number of lista) {
        if (number <= menor) {menor = number}
    }
    lista_ordenada.push(menor)
    x = lista.indexOf(menor)
    lista.splice(x,1)
}

console.log(lista)
console.log(lista_ordenada)
