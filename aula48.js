//retorna o elemento que ele achou, se não encontrar ele retorna undefined.
//função find.
const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21, 25, 19, 15, 20, 16, 18, 22]
p_array.innerHTML = "[" + elementos_array + "]"
//ele pega o primeiro elemento e já puxa.
//ele compara todos os elementos, olha se eles estão de acordo com a if.
//ele valida o array, ao que eu especifiquei.
btnVerificar.addEventListener("click", (evt) => {
    const ret = elementos_array.every((e, i) => {
        if (e < 18) {
            resultado.innerHTML = "Array não conforme na posição " + i
        }
        return e >= 18
    })
    if (ret) {
        resultado.innerHTML = "OK"
    }
    // console.log(ret)
})

//a função every ela vai procurar por equivalências,
//ou seja ele vai percorrer todo o array e vai ver se 
// / todos os elementos do array vão equivaler ao arrow function que eu 
//especificar. por exemplo
