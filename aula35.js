//metodo toggle ele verifica se tem a classe
//se tiver a classe ele adiciona, se não tiver ele remove.
const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn = document.getElementById("btn_copiar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el) => {
    el.addEventListener("click", (evento) => {
        const curso = evento.target
        curso.classList.toggle("selecionado")
        const resultado = curso.classList.contains("selecionado")
        if (!resultado && !caixa1.contains(curso)) {
           caixa1.appendChild(curso) 
        }
    })
})

btn.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]//existe uma chave :not() ele vai listar alguém
    //que não possui a classe selecionado. ".curso:not(.selecionado)" aqui eu falo só os que tem curso.
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)//adiciona um filho.
    })
})
