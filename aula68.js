//dois elementos com funcionalidades diferentes.
//construtor que tenha algum parâmetro, outro que não tenha. etc
//POLIMORFISMO
class Carro {
    constructor(tipo, estagioTurbo) {
        this.turbo = new Turbo(estagioTurbo)
        if (tipo == 1) {
            this.velMax = 120
            this.nome = "normal"
        } else if (tipo == 2) {
            this.velMax = 160
            this.nome = "esportivo"
        } else if (tipo == 3) {
            this.velMax = 200
            this.nome = "super esportivo"
        }
        this.velMax += this.turbo.pot
    }
    info() {
        console.log(`
            Nome:${this.nome}
            Velocidade:${this.velMax}
            Turbo:${this.turbo.pot}`)
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0
        } else if (e == 1) {
            this.pot = 50
        } else if (e == 2) {
            this.pot = 75
        } else if (e == 3) {
            this.pot = 100
        }
    }
}

class CarroEspecial extends Carro {
    constructor(estagioTurbo) {
        super(4, estagioTurbo)
        this.nome = "Carro Especial"
        this.velMax = 300 + this.turbo.pot
    }
    //se eu quiser criar um novo info vulgo polimorfismo.
    //basta eu sobrescrever o metodo do pai
    //colocando outro aqui
    //se eu quiser usar o do pai aí eu uso o super.
    // info(){
    //     super.info()
    // }
    info() {
        super.info()
        console.log("--------------------------")
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)

c1.info()
c2.info()
c3.info()