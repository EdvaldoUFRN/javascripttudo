//função FETCH permitir trabalhar com arquivos e leituras de arquivos, consumo e envio de dados de api.
//como obter o request de algo.
//vou criar uma api.
//estando num replit da vida e colocando nodejs, eu irei criar a api.

// var http = require('http');
// http.createServer(function (req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.writeHead(200, { 'Content-Type': 'application/json' });

//     let numero = {
//         valor: Math.round(Math.random() * 10)
//     }

//     res.end(JSON.stringify(numero));
// }).listen(8080);
//como eu vou consumir isso?
const p_temp = document.getElementById("p_temp")
const p_nivel = document.getElementById("p_nivel")
const p_press = document.getElementById("p_press")
const btn_texto = document.getElementById("btn_texto")

const obterDados = () => {
    const endpoint = "https://9028d902-5793-4c22-a8fe-cfb5c77f13eb-00-2io42emibdjas.kirk.replit.dev/" //o site da api.
    fetch(endpoint, { method: "get" }) //é o padrão já, então eu posso deixar sem.
        .then(res => res.json())//vai converter, vai fazer o retorno dos dados em texto. ao inves de texto vamos transformar em json
        .then(dados => { //segundo then já vai receber o retorno desse dado em texto, tratada.
            console.log(dados)
            p_temp.innerHTML = dados.temperatura
            p_nivel.innerHTML = dados.nivel
            p_press.innerHTML = dados.pressao
        })
}
// let res = fetch(endpoint) // vai retornar uma promise.

//then() vai tratar a resposta. recebendo o retorno.


//dentro do response que q a gente vai receber, nos temos várias métodos que podemos fazer uso para tratar esse dado.
console.log("teste")


let intervalo = setInterval(obterDados, 1000) //estou atualizando direto os dados.
obterDados()

//como fazer um envio, um post para a api receber esses dados e ela tratar eles.

let dados = {
    nome: "Bruno",
    canal: "CFBCursos",
    curso: "Javascript"
}

let cabecalho = {
    method: "POST",
    body: JSON.stringify(dados)
}

const gravarDados = () => {
    const endpoint = "https://9028d902-5793-4c22-a8fe-cfb5c77f13eb-00-2io42emibdjas.kirk.replit.dev/"
    fetch(endpoint, cabecalho) //posso colocar várias coisas nesse fetch.
        .then(res => res.json())
        .then(ret => {
            console.log(ret)
        })
}
//isso daqui é o backend, agora falta a gente fazer o backend.
btn_texto.addEventListener("click", (evt) => {
    gravarDados()
})

//pronto aqui eu aprendi a dar post e a dar request.