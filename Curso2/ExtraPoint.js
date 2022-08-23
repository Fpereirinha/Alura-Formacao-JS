const notas = [10,9,8,7,6]
const notas2 = [10,9,8,7,6]

notas.forEach((x,y) =>{
    notas[y] = x +1
})

//console.log(notas)

const notas_update = notas2.map(nota => nota == 10 ? nota : ++nota)
/*const notas_update2 = notas2.map(nota =>{
    if (nota == 10){
        return nota
    } else{
        return ++nota
    }
})*/
    
console.log(notas_update)
