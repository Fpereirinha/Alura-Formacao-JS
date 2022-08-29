export default class User{
    #nome
    #email
    #nascimento
    #role
    #ativo
    #sobrenome
    constructor(nome,sobrenome, email, nascimento, role = 'estudante', ativo = true) {
        this.#nome = nome
        this.#sobrenome = sobrenome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role
        this.#ativo = ativo
    }
    // getters //
    get nome(){
        return `${this.#nome} ${this.#sobrenome}`
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }
    // getters //
    // setters //
    set nome(nome_){
        let [nome__, ...sobrenome] = nome_.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#sobrenome = sobrenome
        this.#nome = nome__
    }
    set email(email_){
        this.#email = email_
    }
    set role(role_){
        this.#role = role_
    }
    set ativo(ativo_){
        this.#ativo = ativo_
    }
    set nascimento(nascimento_){
        this.#nascimento = nascimento_
    }
    // setters //
    info(){
        return `${this.nome}  ${this.nascimento} ---- ${this.role}`
    }
}


