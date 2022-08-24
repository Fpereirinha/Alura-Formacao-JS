let lista = [1,55,11,22,44,9,9,0,0,0,55,2]
let lista_ordenada = []
let lista_ordenada2 = []
// organizar sem repetir //
for (let i = 0; i < lista.length; i++) {
    let menor = 9999999999
    for (const number of lista) {
        if (number <= menor && ! lista_ordenada.includes(number)) {menor = number}
    }
    if (menor !== 9999999999){lista_ordenada.push(menor)}
}
console.log(lista_ordenada)
console.log(lista)
// organizar, repetindo//
copy_list = [...lista]
for (let i = 0; i < lista.length; i++) {
    let menor = copy_list[0]
    for (const number of copy_list) {
        if (number <= menor) {menor = number}
    }
    lista_ordenada2.push(menor)
    x = copy_list.indexOf(menor)
    copy_list.splice(x,1)
}
console.log(lista)
console.log(lista_ordenada2)

