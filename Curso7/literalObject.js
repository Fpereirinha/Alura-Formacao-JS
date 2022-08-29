const user = {
    nome: 'Pedro',
    email: 'Pedrofpereira222@gmail.com',
    age: 21,
    date: '2021/01/01',
    role: 'Admin',
    active: true,
    exibirInfo() {
        return `${this.nome} tem ${this.age} anos e se cadastrou em ${this.date}, ele é um ${this.role}. E está ${this.active ? 'Ativo' : 'Inativo'}`
    }
}
const admin = {
    nome: 'Gustavo',
    email: 'gust@ggg',
    role: 'Admin',
    age: 23,
    criaCurso(){
        console.log('aaa')
    }
}
/*function exibeInfo(){
    console.log(this.nome, this.email)
}
exibeInfo.call(admin)*/
Object.setPrototypeOf(admin, user)
console.log(admin.exibirInfo())
console.log(user.exibirInfo())


