//aprender a criar um elemento e anexar ele a qualquer parte da página.
const caixa1 = document.getElementById("caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
//qual elemento ele precisa criar, ele vai ficar na memória.
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
cursos.map((el)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id",("c" + cursos.indexOf(el).toString()))//eu poderia usar o parâmetro chave dentro do map
    //(el,chave).
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el
    caixa1.appendChild(novoElemento)
})

