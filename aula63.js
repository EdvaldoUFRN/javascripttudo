//herança
//uma classe herda de outra classe
//metodos e propriedades
//tudo que vale para pai, vale para filho.

class Carro {
    //classe pai
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function () {
        this.ligado = true
    }
    desligar = function () {
        this.ligado = false
    }
    setCor = function (cor) {
        this.cor = cor
    }
}
//no carro é uma classe base.

//chamar o construtor do carro para militar.

class Militar extends Carro {//classe filho
    constructor(nome, portas, blindagem, municao) {
        //invocar o construtor da classe pai
        super(nome, portas)//invocar algo especifico da classe pai,
        //usar o super.
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde") //aqui eu estou definindo que todos os carros militares serão verdes.
    }
    atirar = function () {
        if (this.municao > 0) {
            this.municao--
        }
    }
}

class Utilitario extends Carro{
    //aí eu vou fazendo as mesmas coisas igual o militares.
}
const c2 = new Militar("Lutador",1,100,50)
c2.setCor("Azul")
console.log(c2)