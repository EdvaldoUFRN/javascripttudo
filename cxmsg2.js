//vou colocar o estilo todo aqui.
//vamos criar uma classe, colocar propriedades que queremos e os métodos, mostrar, ocultar, remover.
//pra tornar ela personalizavel eu vou criar um objeto literal de configuração e passar ele para o construtor da classe.
//assim a gente pode configurar algum elemento para algo.
//não precisa ter o mesmo nome do arquivo.

class Cxmsg {
    static cor = "#888" //caso o usuário não configure a caixa de mensagem, ela já sai com uma cor fixa.
    static destino = null
    static divmsg = null

    static config = (config) => {
        this.cor = config.cor
    }

    static mostrar = (titulo, texto) => { // a caixa de mensagens vai ser uma junção de divs.

        this.titulo = titulo
        this.texto = texto
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
        const tituloCxmsg = document.createElement("div")
        tituloCxmsg.setAttribute("style", estilo_tituloCxmsg)
        tituloCxmsg.innerHTML = this.titulo
        areaCxmsg.appendChild(tituloCxmsg)
        //agora eu vou fazer a parte do corpo.
        const estilo_corpoCxmsg =
            "display:flex;" +
            "justify-content:flex-start;" +
            "align-items:center;" +
            "width:100%;" +
            "background-color:#eee;" +
            "color:#000;" +
            "padding:30px 5px;"
        const corpoCxmsg = document.createElement("div")
        corpoCxmsg.setAttribute("style", estilo_corpoCxmsg)
        corpoCxmsg.innerHTML = this.texto
        areaCxmsg.appendChild(corpoCxmsg)

        //agora é a parte do rodapé
        const estilo_rodapeCxmsg =
            "display:flex;" +
            "justify-content:space-around;" +
            "align-items:center;" +
            "width:100%;" +
            "background-color:#ccc;" +
            "color:#000;" +
            "padding:5px;" +
            "border-radius:0px 0px 5px 5px"
        const rodapeCxmsg = document.createElement("div")
        rodapeCxmsg.setAttribute("style", estilo_rodapeCxmsg)
        areaCxmsg.appendChild(rodapeCxmsg)

        //vou criar os botões.
        const estilo_botaoCxmsg =
            "background-color:" + this.cor + ";" +
            "color:#fff;" +
            "padding:10px 50px;" +
            "border-radius:5px;" +
            "cursor:pointer;" +
            "text-transform:uppercase;"

        const btn_ok = document.createElement("button")
        btn_ok.setAttribute("style", estilo_botaoCxmsg)
        btn_ok.innerHTML = "Ok"
        btn_ok.addEventListener("click", (evt) => {
            this.ocultar()
        })
        rodapeCxmsg.appendChild(btn_ok)
    }
    static ocultar = () => {
        this.divmsg.remove()
    }
}

//como eu quero facilitar isso, eu irei colocar ele como um módulo
//então eu irei exportar.

export { Cxmsg } //para quem for utilizar esse modulo.