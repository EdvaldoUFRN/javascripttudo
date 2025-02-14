//carregando os modulos
var http = require('http');
var url = require('url');

//função de callback para o servidor HTTP
function callback(request, response) {
    //faz o parser da url separando o caminho path
    var parts = url.parse(request.url);
    var path = parts.path;
    //configura o tipo de retorno para application/json
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    //verifica o path
    if (path == '/teste') {
        // response.end("{\"nome\":\"Ricardo\",\"sobrenome\":\"Lecheta\"}");
        //esse de cima é uma string em formato json.
        //Criar um objeto em javascript
        // var pessoa = {
        //     'nome': 'Ricardo',
        //     'sobrenome': 'Lecheta'
        // };
        //converter o objeto para string no formato json.
        // var json = JSON.stringify(pessoa);
        //Escreve o JSON na resposta (response) da requisição HTTP
        //parte do array de objetos.
        //cria um array
        // var pessoas = []
        //cria 2 pessoas
        // var p1 = {
        //     'nome':'Ricardo',
        //     'sobrenome':'Lecheta'
        // };
        // var p2 = {
        //     'nome':'Steve',
        //     'sobrenome':'Jobs'
        // };
        //adiciona os objetos no array
        // pessoas.push(p1);
        // pessoas.push(p2);
        //AGORA VOU FAZER COM CLASSES
        //cria um array
        var pessoas = []
        //CLASSE PESSOA
        var Pessoa = class {
            constructor(nome, sobrenome) {
                this.nome = nome;
                this.sobrenome = sobrenome;
            }
        };
        //cria 2 objetos do tipo pessoa
        var p1 = new Pessoa("Ricardo", "Lecheta");
        var p2 = new Pessoa("Steve", "Jobs");
        //Adiciona os objetos no array
        pessoas.push(p1);
        pessoas.push(p2);
        //Converte o array para JSON
        var json = JSON.stringify(pessoas);
        response.end(json);
    } else {
        response.end("Not found: " + path);
    }
}
//cria um servidor http que vai responder "hello world" para todas as requisições
var server = http.createServer(callback);
//porta que o servidor vai escutar
server.listen(3000);
//mensagem ao iniciar o servidor.
console.log("Servidor iniciado em http://localhost:3000/");
