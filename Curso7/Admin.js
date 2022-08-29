import User from "./User.js";
export default class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email,nascimento,role,ativo);
        this.cursos = []
    }
    novoCurso(curso, vagas){
        this.cursos.push({[curso] : vagas + ' vagas'})
        console.log('curso adicionado com sucesso.')
    }
    listaCurso(){
        return this.cursos
    }
}
