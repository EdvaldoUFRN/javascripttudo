
const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21, 25, 19, 15, 20, 16, 18, 22]
p_array.innerHTML = "[" + elementos_array + "]"
//some ele funciona tipo o every,
//mas ele olha se apenas um é competente à minha especificação, 1 ou mais.
//se for ele já retorna ok.
btnVerificar.addEventListener("click", (evt) => {
    const ret = elementos_array.some((e, i) => {
        if (e > 1) {
            resultado.innerHTML = "Array não conforme na posição " + i
        }
        return e<0
    })
    if (ret) {
        resultado.innerHTML = "OK"
    }

})

