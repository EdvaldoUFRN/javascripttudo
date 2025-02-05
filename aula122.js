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

const endpoint = "https://9028d902-5793-4c22-a8fe-cfb5c77f13eb-00-2io42emibdjas.kirk.replit.dev/" //o site da api.

// let res = fetch(endpoint) // vai retornar uma promise.

//then() vai tratar a resposta. recebendo o retorno.

fetch(endpoint)
    .then(res => res.json())//vai converter, vai fazer o retorno dos dados em texto. ao inves de texto vamos transformar em json
    .then(dados => { //segundo then já vai receber o retorno desse dado em texto, tratada.
        console.log(dados)
    })
//dentro do response que q a gente vai receber, nos temos várias métodos que podemos fazer uso para tratar esse dado.
console.log(res)