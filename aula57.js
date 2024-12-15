//objetos.
//orientação a objetos.
//operador new, cria a classe, a base, a instrução, tudo que vai contemplar naquele 
//objeto, aí basta eu instanciar cada um.
//mas cada um deles é individuais.
//eles vão ter propriedades e métodos.
//metodo construtor ele é sempre iniciado
//quando instancia um novo objeto.
class Pessoa {
    constructor(nome) { //agora eu sou obrigado a passar um parâmetro.
        this.nome = nome
    }
}

let p1 = new Pessoa("etste")
let p2 = new Pessoa(10)
let p3 = new Pessoa("HGello world")
//nada dentro dos parenteses, esse faz referencia direta
//ao construtor.
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)
//toda vez que uso new ele instancia um novo objeto.
//criar uma variável do tipo Pessoa.
//this.nome cria uma propriedade nome.
//new executa o método construtor.
