//aprender quando podemos
//class por function.
function Carro(nome, idade) {

    this.nome = nome
    this.idade = idade
    //metodos para trabalhar com as propriedades
    this.getNome = function () {
        return this.nome
    },
        this.getTipo = function () {
            return this.tipo
        },
        //metodos para setar, 
        this.setNome = function (nome) {
            this.nome = nome
        },
        this.setTipo = function (idade) {
            this.idade = idade
        },
        this.info = function () {
            console.log("nome: " + this.nome)

            console.log("idade: " + this.idade)
        }
}
let c1 = new Carro("rapido", 1)
console.log(c1)
//não tenho o construtor nesse modo de fazer uma classe
//objetos literais, por isso que preferimos usar esse metodo com function.
c1.info()
c1.setNome("Pedro")
console.log(c1.getNome())