function soma(x,y,z = 0) {
    if (z == 0){
        return x + y
    } else{
        return x * y
    }
}
function formated_text(x){
    return `Seja bem vindo ${x}`
}
function primo(x){
    for (let index = 2; index < x; index++) {
        if (x % index === 0){
            return false
        }
    return true
    }
}

soma1 = soma(5,5);
console.log(soma1);
console.log(soma(5,5,1));
console.log(formated_text('Pedro'))
console.log(primo(7))