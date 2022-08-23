class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(value){
        if (value > 0) {this.saldo += value};
    }
    saque(value){
        if (value < this.saldo) {this.saldo -= value}
    }
    exibeSaldo(){console.log(this.saldo)}
}

const Pedro = new Cliente('Pedro', 'pedrofpereira222@gmail.com', '654654564', 0)

Pedro.depositar(2000)
Pedro.saque(1000)
Pedro.exibeSaldo()