//ainda falando sobre classes e objetos.
class Carro {
    constructor(nome, tipo) {
        this.nome = nome
        if (tipo == 1) {

            this.tipo = "Esportivo"
        } else if (tipo == 2) {

            this.tipo = "Utilitário"
        }
        else {
            this.tipo = "Militar"
        }
    }
    info(){
        console.log("nome: " + this.nome)
        console.log("tipo: " + this.tipo)
    }
}

let c1 = new Carro("rapido",1)
console.log(c1)

c1.info()