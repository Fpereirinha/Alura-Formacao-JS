const clientes = [
    {
        nome: "Pedro",
        age: 21,
        email: 'pedrofpereira222@gmail.com',
        dependentes : [{nome : 'Jonas',idade : 26, parentesco : 'Primo'}, {nome: 'Pedro', idade: 55, parentesco: 'Irmão'}],
        saldo : 0,
    },
    {
        nome: "Jaona",
        age: 33,
        email: 'pedrofpereira222@jooooana.com',
        dependentes : [{nome : 'kllsl',idade : 26, parentesco : 'dsds'}, {nome: 'dsdssd', idade: 55, parentesco: 'dsdsds'}],
        saldo : 2,
    }
]


const lista_dependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
console.log(lista_dependentes)
console.log('---------')
console.log(clientes[0].dependentes.concat(clientes[1].dependentes))
console.table(lista_dependentes)
let lista = []
for (let index = 0; index < clientes.length; index++) {
    lista = lista.concat([...clientes[index].dependentes])
}
console.log(lista)