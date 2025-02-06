//vou colocar o estilo todo aqui.
//vamos criar uma classe, colocar propriedades que queremos e os métodos, mostrar, ocultar, remover.
//pra tornar ela personalizavel eu vou criar um objeto literal de configuração e passar ele para o construtor da classe.
//assim a gente pode configurar algum elemento para algo.
//não precisa ter o mesmo nome do arquivo.

class Cxmsg {
    titulo = null
    texto = null
    cor = null
    destino = null
    divmsg = null
    constructor(config) {
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
    }
    mostrar = () => { // a caixa de mensagens vai ser uma junção de divs.
        this.divmsg = document.createElement("div")
        const estilo_divmsg =
            "display: flex;" +
            "justify-content:center;" +
            "align-items:center;" +
            "position:absolute;" +
            "top:0px;" +
            "left:0px;" +
            "width:100%;" +
            "height:100vh;" +
            "background-color:rgba(0,0,0,0.7);"
        this.divmsg.setAttribute("id", "divmsg")
        this.divmsg.setAttribute("style", estilo_divmsg)
        this.destino.prepend(this.divmsg)
        //agora vamos criar a área central.
        const estilo_areaCxmsg =
            "display:flex;" +
            "justify-content:flex-start;" +
            "align-items:flex-start;" +
            "flex-direction:column;" +
            "width:300px;"
        const areaCxmsg = document.createElement("div")
        areaCxmsg.setAttribute("style", estilo_areaCxmsg)
        this.divmsg.appendChild(areaCxmsg)

        const estilo_tituloCxmsg =
            "display:flex;" +
            "justify-content:flex-start;" +
            "align-items:center;" +
            "width:100%;" +
            "background-color:" + this.cor + ";" +
            "color:#fff;" +
            "padding:5px;" +
            "border-radius:5px 5px 0px 0px"
        const tituloCxmsg=document.createElement("div")
        tituloCxmsg.setAttribute("style",estilo_areaCxmsg)
        areaCxmsg.appendChild(tituloCxmsg)
    }
    ocultar = () => {

    }
}