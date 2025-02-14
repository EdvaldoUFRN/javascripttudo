//vou carregar os modulos para poder criar um webservice
var http = require('http');
var url = require('url');
//importa a classe CarroDB
const CarroDB = require('./CarroDB');
//consulta os carros pelo tipo e retorna o JSON na resposta
function getCarros(response, tipo) {
    //busca os carros no banco
    CarroDB.getCarrosByTipo(tipo, function (carros) {
        //converte o array de carros para JSON
        var json = JSON.stringify(carros);
        //envia o json como resposta
        response.end(json);

    });
}

//SALVAR UM CARRO
function salvarCarro(response, carro) {
    CarroDB.save(carro, function (carro) {
        console.log("Carro salvo com sucesso: " + carro.id);
        //converto o carro salvo para json
        var json = JSON.stringify(carro);
        //envia o json como resposta
        response.end(json);
    });
}
//função de callback para o servidor HTTP
function callback(request, response) {
    //faz o parser da url separando o caminho (path)
    var parts = url.parse(request.url);
    var path = parts.path;
    //configura o tipo de retorno para application/json
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    //verifica o path
    if (request.method == "GET") {

        if (path == '/carros/classicos') {
            getCarros(response, "classicos");
        } else if (path == '/carros/esportivos') {
            getCarros(response, "esportivos");
        } else if (path == '/carros/luxo') {
            getCarros(response, "luxo");
        } else {
            response.end("Not found: " + path);
        }
    }
    else if (request.method == "POST") {
        //faz a leitura dos dados recebidos por post.
        var body = '';
        request.on('data', function (data) {
            //concatena os dados recebidos na variável body
            console.log("Aqui é a data" + data);
            body += data;
        });
        request.on('end', function () {
            //imprime o corpo body da requisição
            console.log("POST Body é isso que o cliente vai enviar para a gente: " + body);
            //converte o json recebido para objeto
            let carro = JSON.parse(body);
            //faz a soma e retorna os dados
            salvarCarro(response, carro);
        });
        return;
    }

}
//cria um servidor http que vai responder "hello world" a todas as requisições
var server = http.createServer(callback);
//porta que o servidor vai escutar.
server.listen(3000);
//mensagem ao iniciar o servidor
console.log("Servidor iniciado em http://localhost:3000/");