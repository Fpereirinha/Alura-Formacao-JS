function soma(x, y) { return x + y };
console.log(soma(22,23));
soma2(22,33); // Irá apresentar erro, pois a const não foi incializada ainda, porem a func consegue ser executada de qualquer lugar, pois é carregada antes da execução do codigo.
const soma2 = function(x,y) {return x+y};