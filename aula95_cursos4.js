class Cursos {
    static cursos = ["Javascript", "HTML", "CSS", "Arduino", "Raspberry", "C++", "Python", "Java", "C#"]
    constructor() { }
    static getTodosCursos = () => {
        return this.cursos

    }
    static getCurso = (i_curso) => {
        return this.cursos[i_curso]
    }
    static addCurso = (novoCurso) => {
        this.cursos.push(novoCurso)
    }
    static apagarCursos = () => {
        this.cursos = []
    }
}
//static, tenha o mesmo endereço de memoria
// nao precise instanciar a classe para poder utilizar.
export default Cursos
//posso utilizar os métodos static sem ter que instanciar a classe.