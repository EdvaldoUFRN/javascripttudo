//operador this dentro de funções.
function aluno (nome,nota){
    this.nome = nome
    this.nota = nota

    //quero criar métodos aqui dentro.
    this.dados_anonimo = function(){
        setTimeout(function(){
            //ele cria uma nova instancia do this.
            console.log(this.nome)
            console.log(this.nota)
        },2000)//ele dá um atraso, depois daquele tempo ele executa.
    }
    this.dados_arrow = function(){
        setTimeout(()=>{//com o arrow ele contorna a situação.
            //ele cria uma nova instancia do this.
            //ele n usa o contexto léxico, ele usa o contexto do pai, do caso aluno.
            //sempre utilize arrow functions quando for utilizar funções anônimas.
            console.log(this.nome)
            console.log(this.nota)
        },2000)//ele dá um atraso, depois daquele tempo ele executa.
    }
}
const al1=new aluno('Bruno',100)
const al2=new aluno('Breno',200)
aluno('Bruno',1000)
al1.dados_anonimo()
al1.dados_arrow()
//funções podem ser tratadas como objetos.

