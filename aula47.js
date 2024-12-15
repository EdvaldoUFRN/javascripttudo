//retorna o elemento que ele achou, se não encontrar ele retorna undefined.
//função find.
const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")


const elementos_array = [10, 5, 8, 2, 9, 15, 20]

p_array.innerHTML = "[" + elementos_array + "]"
//quando eu tenho um array de textos é a mesma coisa.
//para se fazer.
btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado."
    const ret = elementos_array.find((e, i) => {
        //quando a função encontrar algo, ela retorna true. nele.
        if (e == txt_pesquisar.value) {
            resultado.innerHTML = "Valor pesquisado " + e + " na posição " + i
            return e
        }

        //nem precisa colocar return true, ele já vai retornar true aqui em
        //cima.

    })
    console.log(ret)
})

//se eu quisesse fazer para string eu poderia mudar os dois para toUpperCase
//assim os dois estariam em maiúsculo.
// exemplo if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
//     resultado.innerHTML="Valor encontrado " + e + " na posição " + i
//     return e
// }