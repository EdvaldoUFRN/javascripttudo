//ainda falando sobre classes e objetos.
class Carro {
    canal="padrão para todos."
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
    info() {
        console.log("nome: " + this.nome)
        console.log("tipo: " + this.tipo)
    }
    //metodos para trabalhar com as propriedades
    getNome() {
        return this.nome
    }
    getTipo() {
        return this.tipo
    }
    //metodos para setar, 
    setNome(nome) {
        this.nome = nome
    }
    setTipo(tipo) {
        this.tipo = tipo
    }
}
//vou fazer funções para recuperar uma determinada propriedade.

let c1 = new Carro("rapido", 1)
console.log(c1)

c1.info()
c1.setNome("Pedro")
console.log(c1.getNome())