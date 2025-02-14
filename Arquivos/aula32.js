//não são específicos para um elemento
//mais genérico
//queryselector
//get element by classname
//pega os elementos pelas classes.
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[6]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoEspecial)
//digamos que eu queira adicionar mais alguma classe.
cursosC2.map((el,i)=>{
    el.classList.add("destaque")//adiciona a classe.
})