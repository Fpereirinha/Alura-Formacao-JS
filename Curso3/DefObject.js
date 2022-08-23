const client = {
    nome: "Pedro",
    age: 21,
    email: 'pedrofpereira222@gmail.com',
    dependentes : [{nome : 'Jonas',idade : 26, parentesco : 'Primo'}, {nome: 'Pedro', idade: 55, parentesco: 'Irmão'}],
    saldo : 0,
    depositar : function (x){this.saldo += x },
}

console.log(client.saldo)
client.depositar(30)
console.log(client.saldo)
client.depositar()