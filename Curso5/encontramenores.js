const listaLivros = require('./listaLivros')
function Encontramenores(pivo, array){
    let quantidade = 0
    for (const arrayElement of array) {
        if(arrayElement.preco < pivo.preco){quantidade++}
    }
    trocaLugar(array, array.indexOf(pivo), quantidade)
    return array
}

function trocaLugar(array, de, para){
    const elemento1 = array[de]
    const elemento2 = array[para]
    array[para] = elemento1
    array[de] = elemento2
}
function dividePivo(array){
    let pivo = array[Math.floor(array.length / 2)]
    Encontramenores(pivo, array);
    let menores = 0;
    for (const arrayElement of array) {
        if(arrayElement.preco <= pivo.preco && arrayElement !== pivo){
            trocaLugar(array, array.indexOf(arrayElement), menores)
            menores++
        }
    }
    return array
}

console.log(dividePivo(listaLivros))

module.exports = trocaLugar;