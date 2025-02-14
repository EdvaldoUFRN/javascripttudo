//get element by id, conseguir um elemento específico pelo id dele.
//document instancia da classe document.
//trazer, capturar os elementos e deixar eles nas variáveis para poder operar eles.
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")

const arrayElementos = [c1, c2, c3, c4, c5, c6]//aqui eles são arrays, então podemos utilizar diversos métodos.
console.log(arrayElementos)

//get element by tag name retorna uma coleção de elementos.
let colecaoHMTL = document.getElementsByTagName("div")//o retorno é um html colection.
//posso usar o operador spread.
colecaoHMTL=[...colecaoHMTL]
//podemos converter o html colection para um array.
colecaoHMTL.map((e)=>{
    console.log(e)
})
console.log()