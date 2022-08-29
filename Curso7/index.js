import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";
const Pedro = new User('Pedro','Fernandes Pereira','@gmail.com','06.09.2000')
console.log(Pedro.info())

const Pedro_adm = new Admin('Pedroadm','Fernandes Pereira', '@gmail.com','06.09.2000')
console.log(Pedro_adm.info())
console.log(Pedro_adm.nome)
console.log(Pedro_adm)

Pedro_adm.nome = 'Pedro_Administador Junior'
console.log(Pedro_adm.nome)
/*
let [nome, ...sobrenome] = 'Pedro Fernandes Pereira'.split(' ')
console.log(nome)
console.log(sobrenome.join(' '))*/
