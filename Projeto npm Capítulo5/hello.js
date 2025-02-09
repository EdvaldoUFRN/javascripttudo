//carregar os modulos
var http = require('http');
var url = require('url');
var fs = require('fs');
//Função para ler um arquivo e escrevê-lo na response
function readFile(res, file) {
    //faz a leitura do arquivo de forma assíncrona
    fs.readFile(file, function (err, data) { //esse err é para o caso de um erro.
        //Quando ler, escreve na response o conteúdo do arquivo JSON
        res.end(data);
    });
}
//Função de callback para o servidor HTTP
var callback = (req, res) => {
    //Cabeçalho (header) com o tipo da resposta + UTF-8 como charset
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    //Faz o parser da URL separando o caminho (rota)
    var parts = url.parse(req.url);
    //verificar a rota
    if (parts.path == '/') {
        res.end("Site na raiz.");
    } else if (parts.path == '/carros/classicos') {
        //Retorna o JSON dos carros clássicos
        readFile(res, "carros_classicos.json");
    }
    else {
        res.end("Rota inválida: " + parts.path);
    }
}

//Cria um servidor HTTP que vai responder "Hello world" para todas as requisições
var server = http.createServer(callback);
//Porta que o servidor vai ouvir
server.listen(3000);
//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");
