// variavéis const (constante, imutavel...)
// variavéis let (é possivel a alteração de valores.)
/*const imutavel = 1;
 // const imutavel = 2;  << erro.
var inicial; // apenas declarar, sem atribuição.
var altura = 5;
var usar_sem_declaracao;
var comprimento = 5;
inicial = 2;
area = altura * comprimento; // tipagem dinâmica.
console.log(area) ;
console.log(inicial);
console.log(erro) // retorna undefined. // indefinido */


let forma = 'retangulo';

let altura = 5;
let comprimento = 2;
let area; // variaveis let só podem ser usadas, após serem declaradas (ordem de código), 
          // já var não, elas são carregadas primeiros e usadas depois. Já a const, se manterá imutavel.
if (forma === 'retangulo') {
    area = altura * comprimento;
}else {
    area = (altura * comprimento) / 2
}   

console.log(area);