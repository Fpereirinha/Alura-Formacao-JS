function Client(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(value){
        if (value > 0){
            this.saldo += value
        }
    }
}

function ClientP(nome, cpf,email,saldo,saldoP){
    Client.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoP
    this.Passames = function(){
        this.saldoPoup *= 1.1
    }
}

const Pedro = new ClientP('Pedro', '65465456', 'pedrofpereira222@gmail.com',0, 100)
console.log(Pedro)
Pedro.Passames()
console.log(Pedro)

ClientP.prototype.DepositarPoup = function(value){
    if (value > 0){
        this.saldoPoup += value
    }
}
console.log(Pedro)
Pedro.DepositarPoup(200)
Pedro.depositar(200)
console.log(Pedro)