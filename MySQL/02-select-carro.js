var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'livro',
    password: 'livro123',
    database: 'livro'
});
connection.connect();
//aqui a gente fez a conexão.
//criar agora a consulta.
let sql = "select id,nome,tipo from carro where id = ?";
//esse ? é um placeholder, utilizado para evitar um SQL injection.
// select id, nome, tipo from carro where id = ?

let id = 11;
connection.query(sql, id, function (error, results, fields) {
    if (error) {
        throw error;
    } else if (results.length == 0){
        console.log("Nenhum carro encontrado.");
        return;
    }
    //o carro está na 1 posição do array.
    let carro = results[0];
    console.log(carro.id + ": " + carro.nome);
});
connection.end();
