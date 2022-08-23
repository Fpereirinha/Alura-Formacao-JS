const client = {
    nome: "Pedro",
    age: 21,
    email: 'pedrofpereira222@gmail.com',
    dependentes : [{nome : 'Jonas',idade : 26, parentesco : 'Primo'}, {nome: 'Pedro', idade: 55, parentesco: 'Irmão'}],
    saldo : 0,
    depositar : function (x = 0){this.saldo += x },
}

let relatorio = ''
for (const key in client) {
    if (Object.hasOwnProperty.call(client, key)) {
        const element = client[key];
        if (typeof element != 'function' && typeof element != 'object'){
            relatorio += `${key} : ${element} \n`
        }
    }
}
console.log(relatorio)