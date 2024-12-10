//get element by classname
//pega os elementos pelas classes.
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[6]

const query_divTodas = document.querySelector("div")//ele retorna o primeiro elemento que tiver div
//document.querySelectorAll("div"), vai retornar uma coleção com todos. / NodeList para transformar em array, usa o spread
const query_cursosTodos=[...document.querySelectorAll(".curso")]//vai pegar a classe.
console.log(query_divTodas)
const query_cursoEspecial=document.querySelector("#c1")//vai pegar um id.se eu quiser eu posso colocar [0] do lado para pegar da array.
const query_tags=document.querySelectorAll("div,p")//pega os dois. tem como pegar de classe e tag.
const query_divTodasEsp = document.querySelector("div[class]")//vai pegar todas as div que tem class como atributo.

//tem como eu pegar uma div que tem um elemento p dentro dela

const query_filhos = document.querySelector("div > p")//e pega exatamente os elementos p.

// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)
// //digamos que eu queira adicionar mais alguma classe.
// cursosC2.map((el,i)=>{
//     el.classList.add("destaque")//adiciona a classe.
// })