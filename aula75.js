//Vamos estudar sobre promise
//problemas de javascript assincrono.
//quando executo uma promise, você jura uma promeça, você vai rodando 
//enquanto ele trabalha, e quando ele finaliza o trabalho ele retorna.
//por exemplo ele é muito bom para usos de API.

const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

btn_promessa.addEventListener("click", (evt) => {

    numero.innerHTML = "Processando..."
    promessa()
        //se eu quiser eu também posso associar o then e o catch da seguinte maneira.
        // .then((retorno) => {
        //     numero.innerHTML = retorno

        //     numero.classList.remove("erro")

        //     numero.classList.add("ok")
        // })

        // .catch((retorno) => {
        //     numero.innerHTML = retorno


        //     numero.classList.add("erro")
        //     numero.classList.remove("ok")
        // })
        //atalho para comentar é windows + interrogação.
        //mas aí eu teria que colocar o retorno na função promessa
        //return promise
        
})

const promessa = () => {
    let promise = new Promise((resolve, reject) => {
        //ela pode retornar true ou false
        //ela vai colocar no primeiro parametro.
        //deu ok, vai enviar para o primeiro parametro
        //se não ela vai retornar o reject.
        //resolve e rejected.
        let resultado = false
        let tempo = 3000

        setTimeout(() => {
            if (resultado) {
                resolve("Deu tudo certo")
            } else {
                reject("Deu tudo errado")
            }
        }, tempo) //tipo ele não espera esse daqui.
        // ele prometeu e cumpriu
    })

    promise.then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })//se deu certo
    promise.catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
}


//eu não tive opção de chamar a promise
//e quando eu quiser chamar ela quando eu quiser, eu coloco numa função.

numero.innerHTML = "Esperando..."