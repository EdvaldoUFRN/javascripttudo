//usando timestamp para criar um cronômetro super preciso.
const timer = document.querySelector("#timer")
const btn_iniciar = document.querySelector("#btn_iniciar")
const btn_parar = document.querySelector("#btn_parar")
const btn_zerar = document.querySelector("#btn_zerar")
const btn_parcial = document.querySelector("#btn_parcial")
const parciaisregistradas = document.querySelector("#parciaisregistradas")

let interval = null

let tmpini = null
console.log(tmpini)

const contador = () => {
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = Math.floor((cont) / 1000)
    timer.innerHTML = converter(seg)
}

const converter = (seg) => {
    const hora = Math.floor(seg / 3600)
    const resto = seg % 3600
    const minuto = Math.floor(resto / 60)
    const segundo = Math.floor(resto % 60)
    const form = (hora < 10 ? "0" + hora : hora) + ":" + (minuto < 10 ? "0" + minuto : minuto) + ":" + (segundo < 10 ? "0" + segundo : segundo)
    return form
}


btn_iniciar.addEventListener("click", (evt) => {
    tmpini = Date.now()
    interval = setInterval(contador, 1000)


})
btn_parcial.addEventListener("click", (evt) => {
    let parcial = "<div>" + timer.innerHTML + "</div>"
    parciaisregistradas.innerHTML += parcial

})
btn_parar.addEventListener("click", (evt) => {
    clearInterval(interval)
})
btn_zerar.addEventListener("click", (evt) => {
    tmpini = Date.now()
    timer.innerHTML = "00:00:00"
    clearInterval(interval)
    parciaisregistradas.innerHTML = ""
})