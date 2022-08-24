lista_livros = [
    {nome:'java', preco:30},
    {nome:'python', preco:33},
    {nome:'JS', preco:22},
    {nome:'JS2', preco:22},
    {nome:'REACT', preco:88},
    {nome:'AZ', preco:77},
    {nome:'WEB', preco:32},
    {nome:'GO', preco:3},
    {nome:'HTML', preco:7},
    {nome:'CSS', preco:1}
]
lista_ordenada = lista_livros.sort((x,y) => x.preco - y.preco)
console.log(lista_ordenada)