const nomes = ['Joao', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]
let lista_alunos_medis = [nomes, medias]
console.log(lista_alunos_medis)
for (let index = 0; index < nomes.length; index++) {
    console.log(`${index+1}° aluno --- Nome: ${nomes[index]} - Média: ${medias[index]}\n`)
}
console.log('------------------------')
for (let index = 0; index < nomes.length; index++) {
    console.log(`${index+1}° aluno --- Nome: ${lista_alunos_medis[0][index]} - Média: ${lista_alunos_medis[1][index]}\n`)
}