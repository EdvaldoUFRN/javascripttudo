//como agora minha classe é statica eu não preciso instanciar um novo objeto da classe.
import { Cxmsg } from "./cxmsg2"
//fazer uma caixa de mensagem.
//a gente tem o alert quando a gente quer a caixinha, e se a gente quiser criar uma caixa dessas só que personalizada ?
//eu vou ter um arquivo de javascript específico cxmsg.js
//vou colocar o estilo tudo ali

//como ele está no arquivo html eu consigo achar ele.

const config = {
    cor: "#48f"
}
// const cxmsg = new Cxmsg(config)
Cxmsg.config(config)
//AGORA SE EU QUISER EU POSSO DEIXAR SEM O CONFIG, MAS SE EU QUISER ALTERAR A COR, VULGO CONFIGURAR A CAIXA, AÍ EU COLOCO.
const btn_mostarcxmsg = document.querySelector("#btn_mostarcxmsg")

btn_mostarcxmsg.addEventListener("click", () => {
    Cxmsg.mostrar("CFB Cursos", "Curso de javascript porran") //sempre que eu precisar dele.
}) 