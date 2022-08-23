const nomes = ['Pedro', 'Joao', 'Gustavo', 'Tamy']
const notas = [6,7,2,1]
const reprovados = nomes.filter((_, indice) => notas[indice] < 6)
console.log(reprovados)