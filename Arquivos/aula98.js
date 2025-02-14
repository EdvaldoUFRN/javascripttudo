//função symbol retornar um symbolo
// retorna um objeto do tipo symbol
// que tem um identificador unico
// serve para identificar propriedades dentro de uma classe
// ou gerar um identificador unico para um objeto
// sempre retorna um objeto do tipo symbol que tenha o identicador symbol.
// nao podemos usar esse valor de retorno do symbol no dom
// ele apenas gera o indicar Interno
//ele vai gerar um valor único, que nunca vai se repetir.

const s1 = Symbol()
const s2 = Symbol.for("Bruno")
//metodo for
//ele vai criar um identificador no registro global para esse registro
//simbolo com o identificador bruno
//eu posso ter dois elementos com o mesmo identificador global
//agora se eu comparar os dois ele vai dar true
//retorna objetos diferentes.
console.log(s1)
console.log(s2)
console.log(s1 == s2)
console.log(Symbol.keyFor(s2))
//keyfor vai trabalhar apenas com os registradores globais.
//quando que ele não encontrar um registrador
//ele vai retornar um undefined.

//vamos fazer uma associação com classe para a gente entender melhor 

class Jogador {
    constructor(nome) {
        this.nome = nome
        this.id = Symbol()

    }
}

let jogadores = [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4")]
//ele não pode ser usado como um id por exemplo dentro do DOM.
let d1 = jogadores[0].id
jogadores = jogadores.filter((j) => {
    return j.id != d1
})

let s = []
let s_jogadores = jogadores.filter((j) => {
    return j.nome == "j1"
})

s = s_jogadores.map((j) => {
    return j.id
})

console.log(s_jogadores)
console.log(s)

console.log(jogadores)
console.log(d1)