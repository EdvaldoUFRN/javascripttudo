const carro = document.getElementById("carro")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")
const btn_parar = document.getElementById("btn_parar")

const init = () => {
    carro.style = "position:relative;left:0px;width:100px"
    tamMax = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamMax = null

const move = (dir) => {

    if (dir > 0) {
        if (parseInt(carro.style.left) <= tamMax) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
        } else {
            clearTimeout(anima)
        }
    } else if (dir < 0) {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + "px"
        } else {
            clearTimeout(anima)
        }
    }
    anima = setTimeout(move, 20, dir) //ele meio que cria a recursividade com o setTimeout
}

btn_parar.addEventListener("click", () => {
    clearTimeout(anima)
})

btn_esquerda.addEventListener("click", () => {
    clearTimeout(anima)
    move(-1)
})

btn_direita.addEventListener("click", () => {
    clearTimeout(anima)
    move(1)
})

//uso de intervalo para poder colocar a animação.
//setTimeOut ele gera o intervalo só faz uma vez e acabou.

window.onload = init
//window.addEventListener("load",init())
window.addEventListener("resize", () => {
    tamMax = window.innerWidth - parseInt(carro.style.width)
})

//animação nessas aulas ficou sendo tipo o fato de utilizar o 
//timeout.
///setar um intervalo.