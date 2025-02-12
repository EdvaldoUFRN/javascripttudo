var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'livro',
    password: 'livro123',
    database: 'livro'
});
connection.connect();
let sql = "select id,nome,tipo from carro";
connection.query(sql, function (error, results, fields) {
    if (error) {
        throw error;
    }
    let carros = results;
    //exemplo 1 para fazer for.
    console.log(carros);
    for (let i = 0; i < carros.length; i++) {
        console.log(carros[i].id + ": " + carros[i].nome);

    }
    //também podemos utilizar a função map.
    carros.map(c=>console.log(c));
});
connection.end();