/*function User(nome, email, exibir = false){
    this.nome = nome
    this.email = email
    this.console = exibir

    this.infos = function (){
        if (exibir === false){
            return `meu nome é ${this.nome} e meu e-mail é ${this.email}`
        }
        else {
            console.log(`meu nome é ${this.nome} e meu e-mail é ${this.email}`)
        }
    }

}
function Admin(role){
    User.call(this, 'Pedro', 'aaaaaa')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
let Pedro_adm = new Admin('admin')
let Pedro = new User('Pedro', "aaaaaa", true)
//console.log(Pedro.infos())
console.log(Pedro_adm.role)
Pedro.infos()*/
const User = {
    init: function (nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfo: function () {
        return this.nome
    }
}
/*
console.log(User.exibirInfo('aa'))
const newUser = Object.create(User)
console.log(newUser.exibirInfo('Pedro'))
console.log(User.isPrototypeOf(newUser))
*/
const newUser = Object.create(User)
newUser.init('Pedro', 'Teste@gmail.com')
console.log(newUser.exibirInfo())

