const client = {
    nome: "Pedro",
    age: 21,
    email: 'pedrofpereira222@gmail.com',
    dependentes : [{nome : 'Jonas',idade : 26, parentesco : 'Primo'}, {nome: 'Pedro', idade: 55, parentesco: 'Irmão'}]
}
client.dependentes.push({nome: 'Sara', idade:22, parentesco:'Prima'})
console.log(client.dependentes)

client.dependentes.forEach(element => {
    console.log(`${element.nome} : ${element.parentesco}`)
});

/*const filhaMaisNova = client.dependentes.filter(dependente => {
    if (dependente.idade === 22){ return dependente} 
})*/

const filhaMaisNova = client.dependentes.filter(dependente => dependente.idade === 55)
console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)