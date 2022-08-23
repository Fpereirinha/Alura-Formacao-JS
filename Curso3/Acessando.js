// Acessando via colchetes \\
const client = {
    nome: "Pedro",
    age: 21,
    email: 'pedrofpereira222@gmail.com'
}
const chaves = ['nome','age','email']
chaves.forEach(chave =>{
    console.log(client[chave])
})
console.log(`${client['nome']}`)

