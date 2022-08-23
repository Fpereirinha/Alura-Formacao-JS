const client = {
    nome: "Pedro",
    age: 21,
    email: 'pedrofpereira222@gmail.com',
    dependentes : [{nome : 'Jonas',idade : 26, parentesco : 'Primo'}, {nome: 'Pedro', idade: 55, parentesco: 'Irmão'}],
    saldo : 0,
    depositar : function (x = 0){this.saldo += x },
}

/* for (const key in client) {
    if (Object.hasOwnProperty.call(client, key)) {  
        if (key === 'dependentes'){
            console.log('Possui a chave dependentes.')
        }
    }
} */
const propClients = Object.keys(client)
console.log(propClients)
if (propClients.includes('dependentes')){
    console.log('Possui dependentes.')
}


const oferecer_seguro = x => {
    if (propClients.includes('dependentes')){
        return `Oferecer seguro para ${x.nome}.`
    }
}

console.log(oferecer_seguro(client))
console.log(Object.values(client))
console.log('---------------')
console.log(Object.entries(client))