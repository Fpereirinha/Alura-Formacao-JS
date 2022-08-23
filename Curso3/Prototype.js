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


const Pedro = new Client('Pedro', '545454121', 'pedrofpereira222@gmail.com', 0)
console.log(Pedro)
Pedro.depositar(200)
console.log(Pedro)