export default class User{
    #nome
    constructor(nome, email, nascimento, role = 'estudante', ativo = true) {
        this.#nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role
        this.ativo = ativo
    }
    info(){
        return `${this.#nome}  ${this.email} ---- ${this.role}`
    }
}


