//fazer uma caixa de mensagem.
//a gente tem o alert quando a gente quer a caixinha, e se a gente quiser criar uma caixa dessas só que personalizada ?
//eu vou ter um arquivo de javascript específico cxmsg.js
//vou colocar o estilo tudo ali

//como ele está no arquivo html eu consigo achar ele.

const config = {
    titulo: "teste",
    texto: "CFB Cursos",
    cor: "#48f"
}
const cxmsg = new Cxmsg(config)

const btn_mostarcxmsg = document.querySelector("#btn_mostarcxmsg")

btn_mostarcxmsg.addEventListener("click", () => {
    cxmsg.mostrar() //sempre que eu precisar dele.
}) 