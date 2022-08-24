const {edFolha, edGalho} = require('./arrays');

/*function juntaListas(lista1, lista2) {
    let lista_principal = [];
    let posicaoAtualLista_1 = 0;
    let posicaoAtualLista_2 = 0;
    let tamanho_lista1 = lista1.length;
    let tamanho_lista2 = lista2.length;
    while(posicaoAtualLista_1 < tamanho_lista1 && posicaoAtualLista_2 < tamanho_lista2){
        let item_lista1 = lista1[posicaoAtualLista_1]
        let item_lista2 = lista2[posicaoAtualLista_2]
        if (item_lista1.preco < item_lista2.preco){
            lista_principal.push(item_lista1)
            posicaoAtualLista_1++
        }else{
            lista_principal.push(item_lista2)
            posicaoAtualLista_2++
        }
    }
    let item_lista1 = lista1[posicaoAtualLista_1]
    let item_lista2 = lista2[posicaoAtualLista_2]
    while (posicaoAtualLista_1 < tamanho_lista1){
        lista_principal.push(item_lista1)
        posicaoAtualLista_1++
    }
    while (posicaoAtualLista_2 < tamanho_lista2){
        lista_principal.push(item_lista2)
        posicaoAtualLista_2++
    }

    return lista_principal;
}


x = juntaListas(edFolha, edGalho)
console.log(x)*/

function juntaListas(lista1, lista2) {
    let lista_principal = [];
    let posicaoAtualLista_1 = 0;
    let posicaoAtualLista_2 = 0;
    let tamanho_lista1 = lista1.length;
    let tamanho_lista2 = lista2.length;
    while(posicaoAtualLista_1 < tamanho_lista1 || posicaoAtualLista_2 < tamanho_lista2){
        let item_lista1 = lista1[posicaoAtualLista_1]
        let item_lista2 = lista2[posicaoAtualLista_2]
        if (posicaoAtualLista_1 < tamanho_lista1 && posicaoAtualLista_2 < tamanho_lista2 && item_lista1.preco < item_lista2.preco){
            lista_principal.push(item_lista1)
            posicaoAtualLista_1++
        } else if(posicaoAtualLista_2 < tamanho_lista2 && posicaoAtualLista_1 < tamanho_lista1 && item_lista1.preco > item_lista2.preco){
            lista_principal.push(item_lista2)
            posicaoAtualLista_2++
        }
        if (posicaoAtualLista_2 < tamanho_lista2 && posicaoAtualLista_1 === tamanho_lista1){
            lista_principal.push(item_lista2)
            posicaoAtualLista_2++
        } else if(posicaoAtualLista_1 < tamanho_lista1 && posicaoAtualLista_2 === tamanho_lista2){
            lista_principal.push(item_lista1)
            posicaoAtualLista_1++
        }

    }

    return lista_principal;
}


x = juntaListas(edFolha, edGalho)
console.log(x)
