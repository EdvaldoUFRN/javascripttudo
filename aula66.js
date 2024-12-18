//membro static dentro de uma classe.
//metodo ou atributo com o membro static.
//eu consigo invocar eles sem que eu tenha instanciado a classe.
//é como se os static pertence-se a classe.
//e não ao objeto instanciado.
//static, quer dizer que ele pertence a classe e não a instancia.

class Npc {
    static alerta = false
    constructor(energia) {
        this.energia = energia
    }
    info = function () {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta ? "sim" : "não"}`)
        console.log(`-------------------------------------`)
    }
    static alertar = () => {
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)

const npc2 = new Npc(30)

const npc3 = new Npc(50)

const npc4 = new Npc(800)
//n precisei ir indo de um em um alterando.
Npc.alertar()

npc1.info()

npc2.info()

npc3.info()

npc4.info()