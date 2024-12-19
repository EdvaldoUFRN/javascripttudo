//exercício calculadora.
const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
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
    
    const res = eval(display.innerHTML.replaceAll(',','.'))
    const valor=res.toString()
    display.innerHTML = valor.replaceAll('.',',')
})