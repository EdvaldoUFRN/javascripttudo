//para a propagação de um evento.
//ele meio que vai propagar esse evento para todos os filhos.
//é como se fosse uma bolha.
//para resolver a gente usa o stop propagation
//ele é da classe event
//quando é disparado um evento esse evento é passado para a função anonima.
const caixa1 = document.getElementById("caixa1")
const cursos = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", () => {
    console.log("clicou")
})

cursos.map((el) => {
    el.addEventListener("click", (evento) => {
        evento.stopPropagation() //então nesse caso ele não propaga o efeito.
    })
})