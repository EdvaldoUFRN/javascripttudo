const head = document.head
const body = document.body

const estilo = "<link rel='stylesheet' href='topo.css'>"
head.innerHTML += estilo

//quero anexar o topo lá no top.

//prepend anexa no início.
const topo = document.createElement("div")
topo.setAttribute("id", "topo")
topo.setAttribute("class", "topo")
body.prepend(topo)

const logo =
    "<div id='logo' class='logo'>" +
    "<img src='logo.png' title='CFB Cursos'/>" +
    "</div>"
topo.innerHTML = logo

const login =
    "<div id='login' class='login'>" +
    "<p id='matricula'>Matrícula:<span></span></p>" +
    "<p id='nome'>Nome:<span></span></p>" +
    "</div>"
topo.innerHTML += login