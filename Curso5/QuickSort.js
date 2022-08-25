/*const listaLivros = require('./listaLivros')
const trocaLugar = require('./encontramenores')

function quickSort(array, esquerda, direita){
    if(array.length > 1){
        let indice_atual = particiona(array, esquerda, direita)
        if(esquerda < indice_atual -1){
            quickSort(array, esquerda, indice_atual - 1)
        }
        if(indice_atual < direita){
            quickSort(array, indice_atual, direita)
        }
    }
    return array
}
function particiona(array, esquerda, direita){
    let pivot = array[Math.floor((esquerda + direita) / 2)]
    let atual_esquerda = esquerda
    let atual_direita = direita
    while (atual_esquerda <= atual_direita){
        while(array[atual_esquerda].preco < pivot.preco){
            atual_esquerda++
        }
        while(array[atual_direita].preco > pivot.preco){
            atual_direita--
        }
        if(atual_esquerda <= atual_direita){
            trocaLugar(array, atual_esquerda, atual_direita)
            atual_direita--
            atual_esquerda++
        }
    }
    return atual_esquerda
}



console.log(quickSort(listaLivros, 0, listaLivros.length - 1))



x = quickSort(listaLivros, 0, listaLivros.length -1)*/
const listaLivros = require('./listaLivros');
const trocaLugar = require('./encontraMenores');

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual - 1) {
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita)
        }
    }
    return array;
}

function particiona(array, esquerda, direita) {
    console.log('array', array)
    console.log('esquerda, direita', esquerda, direita)
    let pivo = array[Math.floor((esquerda + direita) / 2)]
    let atualEsquerda = esquerda; //0
    let atualDireita = direita; //10

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++
        }

        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))

