//get element by id, conseguir um elemento específico pelo id dele.
//document instancia da classe document.
//trazer, capturar os elementos e deixar eles nas variáveis para poder operar eles.
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")

const arrayElementos=[c1,c2,c3,c4,c5,c6]
console.log(arrayElementos)
//for (const e of arrayElementos) {
//    e.innerHTML = 'CFB Cursos.'
//}
arrayElementos.map((e)=>{console.log(e)
    e.innerHTML = "CFB Cursos."
})
//posso obter todos os elementos da minha tela pelos id.
//posso criar um array com eles.
console.log(c1)
console.log(c1.id)
console.log(c1.innerHTML)
c1.innerHTML = 'DCB Cursos'
//o innerhtml é basicamente eu mudar o conteúdo dentro do elemento html.