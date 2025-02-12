//importa a classe CarroDB
const CarroDB = require('./CarroDB');
CarroDB.getCarros(function (carros) {
    //imprime os carros.
    for (let i = 0; carros.length > i; i++) {
        console.log(carros[i].id + ": " + carros[i].nome);
    }
});
//eu poderia também utilizar a função como uma variável.
