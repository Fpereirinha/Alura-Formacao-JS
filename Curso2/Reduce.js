const sala1 = [1,9,5,3,3,4,2,3,4]
const sala2 = [0,8,4,3,2,3,8,9,7,2]
const sala3 = [1,5,8,9,3,2,1]
const media = x => {
    return (x.reduce((sum, actual) => sum + actual) / x.length).toFixed(2)
}
console.log(media(sala1))
console.log(media(sala2))
console.log(media(sala3))
let soma = Number(media(sala1)) + Number(media(sala2)) + Number(media(sala3))
console.log((soma / 3).toFixed(2))