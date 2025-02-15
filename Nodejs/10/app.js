let express = require('express');
let app = express();
let bodyParser = require('body-parser');
//configura para ler os dados do POST por form-urlencoded e application/json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Rotas
app.use('/api/carros', require('./routes/carros')); //se eu quiser eu posso deixar apenas o / para permanecer a barra apenas.

//teste de erro
app.get('/teste_erro', function (req, res) {
    throw Error('Erro ninja!');
});

//Rota para não encontrado '404'
app.use(function (req, res, next) {
    let err = new Error('Não encontrado');
    err.status(404);
    next(err); //ou posso deixar do jeito que estava antes.
    // res.status(404);
    // res.json({err:"Não encontrado"});
});

///rota genérica de erro '500'
//podemos deixar dentro da função, um salvamento do logs do erro.

app.use(function (err, req, res, next) {
    //imprime a stacktrace do erro no console para debug.
    console.log(err);
    res.status(500);
    res.json({erro: 'Erro na transação'});
});

//inicia o servidor
let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://%s:%s", host, port);
});
