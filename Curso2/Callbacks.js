const nomes = ['Pedro', 'Joao', 'Sara', "cleber", 'Gustavo']
nomes.forEach((nome, indice) =>{
    console.log(`${indice+1}° nome: ${nome}`)
})
console.log('-------------')
const imprime = x => console.log(x)
nomes.forEach(imprime)

