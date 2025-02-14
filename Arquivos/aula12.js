//operador Spread
//ele vai quebrar um array e vai devolver elemento a elemento.
let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [...n1]
//copiar um array dentro de outro.
n3 = [...n1, ...n2]

const jogador1 = {
    nome: "Bruno",
    energia: 10000,
    vidas: 15,
    magia: 150
}
const jogador2 = {
    nome: "Bruce",
    energia: 100,
    vidas: 5,
    velocidade: 80
}
const jogador3 = {
    ...jogador1,
    ...jogador2
}
console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)

console.log(jogador3)

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}
let valores = [1, 5, 4]//o spread vai espalhar os valores.

console.log(soma(...valores))
//ao usarmos spread em uma coleção ele transforma em um array, e dá para usar os métodos de array.

//exemplo no navegador
const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(element => {
    element.innerHTML = "curso"
});
//é possível eu adicionar várias coisas etc nesse caso.
console.log(objs1)
console.log(objs2)
