// tipos de dados 
// conversões implicita e explicita.
let num_str = '123';
let num_int = 123;

console.log(typeof num_str);
console.log(typeof num_int);
console.log(num_int === num_str);
console.log(num_int == num_str);
console.log(num_int.toString() === num_str);  // poderia usar String(var)
console.log(num_int === parseInt(num_str));   // poderia usar Number(var)


num_int = String(num_int) // << conversão
num_str = Number(num_str) // << conversão
// lembrando que o js não dará erro ao tentar usar algum operador de tipo diferente number(1232aaaa) < retornará o NaN. 


// operadores de soma com str + int, retornará uma concatenação.
