//usando timestamp para criar um cronômetro super preciso.
const timer = document.querySelector("#timer")

const tmpini = Date.now()
console.log(tmpini)

const contador = () => {
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = Math.floor((cont) / 1000)
    console.log(seg)
}

setInterval(contador, 1000)