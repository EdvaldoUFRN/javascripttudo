var mysql = require('mysql');

//criar a conexão com o MySQL
var connection = mysql.createConnection({
    host:'localhost',
    user:'livro',
    password:'livro123',
    database:'livro'
});

//conecta ao banco de dados.
connection.connect();

//podemos chamar a função connection.query(sql,callback) que vai passar como parâmetro o comando sql que queremos executar e a função callback que receberá o resultado.
let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
connection.query(sql,function(error,results,fields){
    //a função de callback possui 3 parâmetros
    //error:caso a consulta seja inválida.
    //results: contém os registros retornados pela consulta.
    //fields: contém informações sobre as colunas retornadas, neste exemplo as colunas id,nome e tipo

});

//por último quando não formos mais utilizar a conexão, basta fechá-la
connection.end();
