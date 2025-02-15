//aqui a gente vai encapsular o acesso ao banco de dados e os métodos de CRUD
//importa o modulo do mysql
var mysql = require('mysql2');
//classe CarroDB
//função para conectar ao banco de dados.
//detalhe, a gente vai colocar static porque não vai ser preciso instanciar ela.
class CarroDB {
    static connect() {
        //cria a conexão com o mysql.
        var connection = mysql.createConnection({
            host: 'localhost', user: 'livro', password: 'livro123', database: 'livro'
        });
        //conecta ao banco de dados.
        connection.connect();
        return connection; //agora eu posso colocar o retorno dessa função para qualquer variável que eu quiser q represente uma conexão.

    }

    //retorna a lista de carros
    static getCarros(callback) {
        return new Promise((resolve, reject) => {
            let connection = CarroDB.connect();
            //cria uma consulta
            let sql = "select * from carro";
            let query = connection.query(sql, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
            console.log(query.sql); //AQUI É A SAIDA DO QUERY SQL
            console.log("AQUI EM CIMA É A SAÍDA DO QUERY.SQL");
            connection.end();
        })
    }

    //Retorna a lista de carros por tipo do banco de dados.
    static getCarrosByTipo(tipo, callback) {
        return new Promise((resolve, reject) => {
            let connection = CarroDB.connect();
            //cria uma consulta
            let sql = "select id,nome,tipo from carro where tipo = '" + tipo + "'";
            let query = connection.query(sql, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
            console.log(query.sql);
            connection.end();
        });


    }

    //retorna a lista de carros
    static getCarroById(id, callback) {
        return new Promise((resolve, reject) => {

            let connection = CarroDB.connect();
            let sql = "select * from carro where id=?";
            let query = connection.query(sql, id, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    if (results.length == 0) {
                        reject(Error("Nenhum carro foi encontrado."));
                        return;
                    }
                    //Encontrou o carro
                    let carro = results[0];
                    resolve(carro);
                }
            });
            console.log(query.sql);
            connection.end();

        });
    }

    //salva um carro no banco de dados
    //recebe o JSON com dados do carro como parâmetro
    static save(carro, callback) {
        return new Promise((resolve, reject) => {

            let connection = CarroDB.connect();
            let sql = "insert into carro set ? ";
            let query = connection.query(sql, carro, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {

                    //atualizada o objeto carro do parâmetro com o "id" inserido
                    carro.id = results.insertId;
                    //retorna o carro pela função de callback
                    resolve(carro);
                }
            });
            console.log(query.sql);
            connection.end();
        });
    }

    //atualiza um carro no banco de dados
    static update(carro, callback) {
        return new Promise((resolve, reject) => {

            let connection = CarroDB.connect();
            let sql = "update carro set ? where id = ?";
            //id do carro para atualizar
            let id = carro.id;
            let query = connection.query(sql, [carro, id], function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(carro);
                }
            });
            console.log(query.sql);
            connection.end();
        });
    }

    //deleta um carro pelo id
    static deleteById(id, callback) {
        return new Promise((resolve, reject) => {

            let connection = CarroDB.connect();
            let sql = "delete from carro where id = ?";
            let query = connection.query(sql, id, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    console.log(results.affectedRows);
                    resolve(results.affectedRows);
                }
            });
            console.log(query.sql);
            connection.end();
        });
    }
};

module.exports = CarroDB;

//agora podemos fazer os exemplos de novo só que utilizando esse modulo.
