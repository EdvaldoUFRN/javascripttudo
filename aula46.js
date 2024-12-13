const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarCursoAntes = document.getElementById("btnAdicionarCursoAntes")
const btnAdicionarCursoDepois = document.getElementById("btnAdicionarCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")
let indice = 0//fazer o id do elemento



const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el) => {
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt) => {
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)

    indice++
})

const cursoSelecionado = () => {

    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    try {
        alert("Curso Selecionado: " + cursoSelecionado().innerHTML)

    } catch (error) {
        alert("Selecione o curso.")
    }

})

btnRemoverCurso.addEventListener("click", (evt) => {
    try {
        const cs = cursoSelecionado()
        caixaCursos.removeChild(cs)
        //ou eu posso colocar cursoSelecionado.remove() aí vai remover ele mesmo.

    } catch (error) {
        alert("Selecione o curso.")
    }

})

btnAdicionarCursoAntes.addEventListener("click", (evt) => {
    const cs = cursoSelecionado()
    try {
        if (nomeCurso.value != "") {

            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cs)
        }
        else {
            alert("Digite o nome do curso.")
        }

    } catch (error) {
        alert("Selecione o curso.")
    }
})
btnAdicionarCursoDepois.addEventListener("click", (evt) => {
    const cs = cursoSelecionado()
    try {
        if (nomeCurso.value != "") {

            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cs.nextSibling)
        } else {
            alert("Digite o nome do curso.")
        }

    } catch (error) {
        alert("Selecione o curso.")
    }
})