//eventos
//pode programar diretamente nas tags 
//ou nos arquivos javascript.
//qualquer tipo de acontecimento é possível
//ser interceptado
//alt tab é possível você ver tudo que pode colocar.
//na tag você coloca on aí vai aparecer
//os eventos que podem ser utilizados.
//on mostra os eventos que podem ser utilizados.
// const msg = () => {
//     alert("clicou")
// }
// const c1 = document.getElementById("c2")
// //para adicionar um evento usa o metodo eventlistener, lança um escutador no objeto.
// c1.addEventListener("click", () => { msg() })//recebe qual evento recebe e o que será executado quando acontecer. aqui eu n preciso
// //por parenteses, só se tiver parâmetros.
// //também posso colocar uma arrow function lá dentro ao invés do msg.
// //com a arrow function ela pode receber um parâmetro que vai ser tipo o evento que ocorreu e saber quem disparou.
// c1.addEventListener("click", (evento)=>{
//     const el= evento.target
//     el.classList.add("destaque")
// })

const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click",(evento)=>{
        const elemento = evento.target
        elemento.classList.add("destaque")
        console.log(elemento.id + "foi clicado.")
    })
})