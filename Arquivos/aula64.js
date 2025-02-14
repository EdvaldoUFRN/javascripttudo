const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")





let a_carros = []

const removerCarro = (quem) => {
    a_carros = a_carros.filter((el) => {
        return (el.nome != quem)
    })
}

f_tipoMilitar.addEventListener("click", (evt) => {
    f_blindagem.value = 0
    f_municao.value = 0
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
f_tipoNormal.addEventListener("click", (evt) => {
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
})

btn_addCarro.addEventListener("click", (evt) => {
    if (f_tipoNormal.checked) {
        const c = new Carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    } else {
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarExibicaoCarros()
})
const gerenciarExibicaoCarros = () => {
    carros.innerHTML = ""

    a_carros.forEach((c) => {
        const indice = a_carros.indexOf(c)
        const button = document.createElement("button")
        button.innerHTML = "Remover"
        button.addEventListener("click", (evt) => {
            const quemRemover = (evt.target.parentNode.dataset.nome)//o .nome depende
            //do atributo data-* que você colocou.
            //vai retornar um string de dom.
            console.log(evt.target)
            removerCarro(quemRemover)
            console.log(a_carros)
            gerenciarExibicaoCarros()
        })
        const div = document.createElement("div")
        div.setAttribute("class", "carro")
        div.setAttribute("data-nome", c.nome)
        div.innerHTML = `Nome: ${c.nome}<br/>
        Portas: ${c.portas}<br/>
        Cor: ${c.cor}<br/>
        Blindagem: ${c.blindagem}<br/>
        Munição: ${c.municao}<br/>
        `
        div.appendChild(button)
        carros.appendChild(div)
    })
}

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