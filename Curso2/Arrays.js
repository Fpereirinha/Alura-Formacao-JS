// calculo de média //

const notas = [1,3,5,6,7,5,3,4,5,6,7]

const average = (x,y,z) => ((x+y+z) / 3).toFixed(2)
console.log(average(10,9,10))
const average_list = (acumulador, curr) => acumulador + curr;
console.log(notas.reduce(average_list) / notas.length)
console.log(notas.length)
let soma = 0;

notas.forEach(element => {
    soma += element;
});
console.log(soma)