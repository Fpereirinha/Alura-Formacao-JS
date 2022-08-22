const ArrowSum = (x, y) => x + y;
console.log(ArrowSum(22,999));

// mais de uma linha de código >>>
const ArrowSumPlus = (x, y, z) => {
    if (x > 10 || y > 10 || z > 10){
        console.log('Apenas numeros até 10 !')
    }else{
        return x + y + z
    }
}

console.log(ArrowSumPlus(9,8,6))