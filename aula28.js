//função map, percorrer coleções, arrays.
//vai iterar toda a coleção.
//mudar ou retornar algo.
//2 parâmetros ou 3.
const cursos = ['html', 'css', 'javascript', 'php', 'react']
//por ex a cada iteração vai para elemento, tipo php.
cursos.map((elemento, indice) => {
    console.log("Curso: " + elemento + " - Posição do curso:" + indice)
})
let c = cursos.map((elemento, indice) => {
    return "<div>" + elemento + "</div>"
})

console.log(c)

//percorrer toda a coleção etc, para trabalhar com os valores.
//ele é mais otimizado.

let el = document.getElementsByTagName("div")
el = [...el]
console.log(el)
el.map((e,i)=>{
    e.innerHTML="CFB Cursos."
})

//outra maneira de trabalhar é com o valor real
//array que vai operar, e uma chamada de um método que vai substituir os objetos., uma ()=>{que vai alterar os elementos.
//uso chave no parametro para pegar um elemento que eu quero.
const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)//o que tem chaves ele retorna a propriedade.
console.log(val)

const converterInt=(e)=>parseInt(e)
let num = ['1','2','3','4','5'].map(converterInt)
console.log(num)

//map recebe o elemento, a posição e o proprio array q ele vai iterar.
