const client = {
    nome: "Pedro",
    age: 21,
    email: 'pedrofpereira222@gmail.com',
    dependentes : {
        nome : 'Jonas',
        idade : 26,
        parentesco : 'Primo',
    }
}
client.dependentes.nome = 'Joao';
console.log(client.dependentes)