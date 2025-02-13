let express = require('express');
let app = express();
//permite ler os parâmetros do tipo form-urlenconded
var bodyParser = require('body-parser'); //modulo para ler parâmetros do tipo chave por post.
app.use(bodyParser.urlencoded({ extended: false }));
//configura uma rota na raiz
app.get('/', function (req, res) {
    res.json({
        nome: 'ricardo',
        sobrenome: 'lecheta'
    });
});
app.get('/pessoa', function (req, res) {
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.status(200).type("text");
    res.send(nome + " " + sobrenome);
})
app.get('/pessoa/:id', function (req, res) {
    let id = req.params.id;
    res.send("Buscar a pessoa: " + id);
})

//para receber um JSON
app.use(bodyParser.json());
//POST  
app.post('/pessoa', function (req, res) {
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    //testa se o valor do cabeçalho content-type
    if (req.is("json")) {
        //se for JSON
        res.json({ nome: nome, sobrenome: sobrenome });
    } else {
        //caso contrário envia como texto (text/plain);
        res.type("text").send("Texto: " + nome + " " + sobrenome);
    }
    // res.send(nome + " " + sobrenome);
});

//Inicia o servidor
let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://%s:%s", host, port)
});
