//posso ler direto de um arquivo .json ou texto.
const texto = document.getElementById("texto")

const endpoint = "texto.txt"

// fetch(endpoint)
//     .then(res => res.text())
//     .then(res => {
//         console.log(res)
//     })
//pronto ele vai consumir o conteúdo do arquivo de texto.
//eu poderia também armazenar um json no arquivo de texto.

fetch(endpoint)
    .then(res => res.text())
    .then(res => {
        res = JSON.parse(res)
        console.log(res.canal)
        console.log(res.curso)
    })

    //projetos em json mesmo e depois faz o consumo delas.
    