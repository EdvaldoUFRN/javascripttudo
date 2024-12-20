//exercício calculadora.
const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const tcpy = document.getElementById("tcpy")
const tlimpar = document.getElementById("tlimpar")
const tigual = document.getElementById("tigual")
let controle = 0
let sinal = false
let virgula = false
teclasNum.forEach((el) => {

    el.addEventListener("click", (evt) => {
        if (!virgula && sinal == false) {
            if (evt.target.innerHTML == ",") {
                virgula = true
                sinal = true
            }
            if (controle == 0) {
                controle++
                if (display.innerHTML == "0" && virgula == true) {
                    display.innerHTML = "0,"
                } else {
                    if (display.innerHTML == "0") {

                        display.innerHTML = evt.target.innerHTML
                    } else {

                        display.innerHTML += evt.target.innerHTML
                    }
                }
            }
            else if (controle == 1) {
                display.innerHTML += evt.target.innerHTML
                controle++
            } else {

                display.innerHTML += evt.target.innerHTML
            }

        } else {
            if (evt.target.innerHTML != ",") {
                display.innerHTML += evt.target.innerHTML
                sinal = false
            }
        }
    })
})
teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        if (!sinal) {
            controle++
            sinal = true
            if (display.innerHTML == "0") {
                display.innerHTML = ""
            }
            if (evt.target.innerHTML == "*") {
                display.innerHTML += "*"
            } else {
                display.innerHTML += evt.target.innerHTML
            }
            virgula = false
        }
    })
})

//função eval vai pegar tudo vulgo string
//e resolve se for matematicamente possível.
tlimpar.addEventListener("click", (evt) => {
    display.innerHTML = "0"
    controle = 0
    sinal = false
    virgula = false
})

tigual.addEventListener("click", (evt) => {
    sinal = false
    virgula = false
    controle = 0

    const res = eval(display.innerHTML.replaceAll(',', '.'))
    const valor = res.toString()
    display.innerHTML = valor.replaceAll('.', ',')
})

//como jogar algo pra area de transferencia e trazer algo de lá
//propriedade clipboard é a área de transferencia
tcpy.addEventListener("click", (evt) => {
    navigator.clipboard.writeText(display.innerHTML) //tipo ele vai basicamente dar um ctrl c do resultado do display. quando eu der ctrl v vai sair o resultado.
    //copiar algo e mandar pra area de transferencia
    //write e write text copiar e mandar.
    //read e readtext se eu quiser colar.
    //se tiver em um input.
    //pode dar problema em mobile, então teremos que dar um select antes, tipo:
    //teste.select()
    //basta só ele não, é bom colocar até 
    //teste.setSelectionRange(0,99999)//mobile
    //navigator.clipboard.writeText(teste.value)

})

//como fazer um elemento retratil
//quando eu quero sumir com ele e depois mostrar ele.
//colocaremos uma aba pra poder abrir ou fechar a calculadora.
