const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")
//vamos aprender sobre a função 
//getBoundingClientRect() em javascript.,
//retorna as propriedades como posição e tamanho dos elementos.
//pertence a class element
//div, p etc, são do tipo element. então todos eles trazem esse mesmo método.
//propriedade access key, podemos definir uma tecla de atalho ou obter do componente.
q1.accessKey = "b"
q2.accessKey = "a"
//tem que apertar alt +  a teclada de atalho.
//se eu quiser acessar é só colocar.
console.log(q1.accessKey)
console.log(q2.accessKey)
const info = (el) => {
    let DOMRect_q1 = el.getBoundingClientRect()
    posx.innerHTML = `posx:${DOMRect_q1.x}`
    posy.innerHTML = `posy:${DOMRect_q1.y}`
    altura.innerHTML = `altura:${DOMRect_q1.height}`
    largura.innerHTML = `largura:${DOMRect_q1.width}`

}
console.log(q1.getBoundingClientRect())

q1.addEventListener("click", (evt) => {
    info(evt.target)
})

q2.addEventListener("click", (evt) => {
    info(evt.target)
})
