var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'livro',
    password: 'livro123',
    database: 'livro'
});

connection.connect();

//sql para inserir o carro.
let sql = "insert into carro set ? ";
//objeto carro em JSON
var carro = {
    nome: "Meu Carro",
    tipo: "esportivos"
};

connection.query(sql, carro, function (error, results, fields) {
    if (error) throw error;
    console.log("Carro salvo com sucesso, id: " + results.insertId);
});
connection.end();