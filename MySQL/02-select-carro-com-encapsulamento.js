const CarroDB = require('./CarroDB');
CarroDB.getCarroById(11, function (carro) {
    //imprime os dados do carro
    console.log(carro.id + ": " + carro.nome);
});