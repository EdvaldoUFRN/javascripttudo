//Aqui eu irei criar um servidor http

//carregar o modulo http
var http = require('http');
//cria um servidor que vai responder "Hello world" para todas as requisições.
var server = http.createServer(function (request, response) {
    //define o cabeçalho (header) com o tipo da resposta
    response.writeHead(200, { "Content-type": "text/plain" });
    //A Mensagem de retorno
    response.end("Hello World Node!\n");
});
//Definir a porta que o servidor vai escutar
server.listen(3000);
//Mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");

//pronto agora basta que eu dê deploy nesse arquivo, que ele irá criar o servidor e já vai estar escutando.
