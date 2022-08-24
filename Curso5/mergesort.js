const listaLivros = require('./listaLivros')

function mergeSort(lista,){
    console.log(lista)
    if(lista.length > 1){
        const meio = Math.floor(lista.length / 2);
        const parte1 = mergeSort(lista.slice(0, meio));
        const parte2 = mergeSort(lista.slice(meio));
        lista = juntaListas(parte1,parte2)
    }
    return lista;
}

function juntaListas(lista1, lista2) {
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

    return lista_principal.concat(posicaoAtualLista_1 < tamanho_lista1 ? lista1.slice(posicaoAtualLista_1) : lista2.slice(posicaoAtualLista_2));
}
console.log(mergeSort(listaLivros))
