const lista = [];
lista.push(1);
lista.push(1);
lista.push(2);
lista.push(3);
lista.push(22);
lista.push(1);
let soma = 0;
lista.forEach(element => {soma += element});
let media = soma / lista.length
console.log(lista);
console.log(media);
lista.pop();
console.log(lista)
soma = 0;
lista.forEach(x => {soma += x});
console.log(soma / lista.length)
