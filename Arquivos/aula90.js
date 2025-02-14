//objeto literal é uma forma de definir um tipo bem dinamico.
//pode trabalhar como as classes.
//const div_objetos = document.getElementById("objetos")
const computador = {
    //criar uma propriedade
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",
    info: function () {
        console.log(this.cpu)
    }
}//quando eu associo a uma chave ele já é um objeto.
//se eu quiser eu posso passar ele no innerhtml usando o JSON.stringify
//posso criar também um array de objetos literais.

const computadores = [
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"
    },
    {
        cpu: "i9",
        ram: "24gb",
        hd: "1tb"
    },
    {
        cpu: "i3",
        ram: "16gb",
        hd: "1tb"
    },
]


//se eu quiser clonar um objeto.
const c1 = Object.assign({}, computador)
delete (computador.hd)//aqui ele vai apagar a propriedade.





c1.info()
//também posso fazer um merge de objetos.
const o1 = { obj1: '1' }
const o2 = { obj2: '2' }
const o3 = { obj3: '3' }
const o4 = Object.assign(o1, o2, o3)
console.log(o4)

//se eu quiser adicionar nova propriedade.
computador["monitor"] = "22pol"
computador.placaVideo = "rtx"
//formas que eu posso chamar alguma propriedade.
console.log(computador.cpu /*ou computador["cpu"]*/)











// computadores.forEach((c) => {
//     console.log(c)
//     const div = document.createElement("div")
//     div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd
//     div.setAttribute("class", "computador")
//     div_objetos.appendChild(div)
// })


//se eu quiser usar ele como base para a criação de outros objetos.
const computador2 = {
    //criar uma propriedade
    cpu: "",
    ram: "",
    hd: "",
    info: function () {
        console.log(this.cpu)
    }
}

const c2 = Object.create(computador2)
c2.cpu = "i9"
c2.info()