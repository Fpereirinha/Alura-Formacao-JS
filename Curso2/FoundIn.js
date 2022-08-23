const nomes = ['Joao', 'Juliana', 'Caio', 'Ana']
const medias = [10, 8, 7.5, 9]
let lista_alunos_medis = [nomes, medias]

const exibeNome_nota = (nome_aluno) => {
    if (lista_alunos_medis[0].indexOf(nome_aluno) === -1) {
        return `O aluno ${nome_aluno} não está na lista.`
    } else{
        return `O aluno ${nome_aluno} está na lista e sua média é ${lista_alunos_medis[1][lista_alunos_medis[0].indexOf(nome_aluno)]}`
    }
}
console.log(exibeNome_nota('Juliana'))
