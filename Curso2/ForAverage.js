const media = (x = []) =>{
    let soma = 0;
    x.forEach(element => {
        soma += element
    });
    return (soma / x.length).toFixed(2)
}
const notas = [5,5,4,8,7,9,6,3,2,1,5,4,1,2,5,4]
console.log(media(notas))