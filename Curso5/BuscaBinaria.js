let listaLivros = require('./listaLivros')
listaLivros = listaLivros.sort((a,b) => a.preco - b.preco)
function buscaBinaria(array, de, ate, value){
    console.log(de, ate)
    if(de > ate){
        return 'não existe'
    }
    let meio = Math.floor((de+ate) / 2)
    let atual = array[meio]
    if(atual.preco === value){
        return atual
    }
    if(value < atual.preco){
        return buscaBinaria(array, de, meio - 1, value)
    }
    if(value > atual.preco){
        return buscaBinaria(array, meio+1, ate, value)
    }
}


console.log(buscaBinaria(listaLivros, 0, listaLivros.length-1, 32))
