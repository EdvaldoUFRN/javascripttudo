//desestruturação, permite extrair dados de um objeto ou de um array e associar esses dados a variáveis distintas.
//muito útil ele.
let a, b, c, d

//associar elementos de um array.
// [a,b,c,d]=[10,20,30,40]
// console.log(a)

let numeros = [10, 20, 30, 40]
let [e, f, g, h] = numeros
    //ele já vai associar cada uma dessas posições do array à essas variáveis que eu instanciei.
    //se eu tiver um objeto no lugar de um array.
    // ({ a, b, c, d } = {
    //     a: "verde",
    //     b: "amarelo",
    //     c: "azul",
    //     d: "branco",
    // })

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//posso também desestruturar e deixar algumas em padrão.
//caso não tenha nada para definir.
let o,p,q,r
[o,p=0,q=0,r=0] = [10]
console.log(o)
console.log(p)
console.log(q)

//também tem como eu fazer aquela troca de igualdade rápido.
//por exemplo
let x=10;
let y = 20;

[x,y] = [y,x]
console.log(x)
console.log(y)

//também podemos utilizar para extrair de uma função, baseando-se no retorno dela.
let numerosa=()=>{
    return [10,20,30,40]
}
let [carai,louco] = numerosa()

console.log(carai)
console.log(louco)

//podemos utilizar o operador rest do spread.
let teste = [10,20,30,40,50,60,70,80,90]
let [ca,be,ag,...cia] = teste 

console.log(ca)
console.log(be)
console.log(ag)
console.log(cia)
//ainda em relação a objetos, podemos fazer assim também.
let obj = {nome:"Bruno",canal:"CFBCursos"}
let {nome,canal}=obj //as variáveis precisam ter o mesmo nome dos atributos.

console.log(nome)
console.log(canal)

const cores=()=>{
    return ["verde","amarelo","azul","branco"]
}

let [c1,c2,,c3]=cores() //aqui a gente colocou a virgula e fez ele ignorar o outro elemento.
console.log(c1)
console.log(c2)
console.log(c3)

let texto = "Curso de Javascript"
let [...t] = texto.split(" ")
console.log(t)