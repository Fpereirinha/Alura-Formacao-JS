class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(value) {
        if (value > 0) { this.saldo += value }
    }
    saque(value) {
        if (value < this.saldo) { this.saldo -= value }
    }
    exibeSaldo() { console.log(this.saldo) }
}




class ClientP extends Cliente{
    constructor(nome, email, cpf, saldo, saldop) {
        super(nome, email, cpf, saldo)
        this.saldopoup = saldop
    }
    depositarP(value) {
        if (value > 0) { this.saldopoup += value }
    }
    passaMes() { this.saldopoup *= 1.1 }
    exibeSaldoP() { console.log(this.saldopoup) }

}

const Pedro = new ClientP('Pedro', 'pedrofpereira222@gmail.com', '65465456', 0, 2542)
Pedro.depositar(100)
Pedro.depositarP(2000)
Pedro.exibeSaldoP()
Pedro.passaMes()
Pedro.exibeSaldoP()

console.log('------')
console.log(Object.keys(Pedro))
console.log('------')
console.log(Object.values(Pedro))
console.log('------')
console.log(Object.entries(Pedro))
console.log(Pedro.cpf)
Pedro.saque(22)
Pedro.exibeSaldo()