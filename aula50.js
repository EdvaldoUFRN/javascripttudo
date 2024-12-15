
const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1, 2, 3, 4, 5]
let aux = []
let dobro=[]
p_array.innerHTML = "[" + elementos_array + "]"

//
btnReduzir.addEventListener("click", (evt) => {
    elementos_array.reduce((anterior, atual, pos) => {
        aux.push(atual)
        dobro.push(atual*2) //parece que o primeiro não foi considerado.
        return atual + anterior
    })
    //esse anterior é o retorno da operação.
    resultado.innerHTML += "<br/>" + aux+"<br/>"+dobro

})

// console.log(ancestry.reduce(function(min, cur) {
//     if (cur.born < min.born) return cur;
//     else return min;
//     }));
//     // → {name: "Pauwels van Haverbeke"
//     , born: 1535, …}
//exemplo para se caso eu quiser encontrar o meu ancestral mais antigo.