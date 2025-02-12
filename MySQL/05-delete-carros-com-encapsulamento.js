const CarroDB = require('./CarroDB');

var carro = {id:34};
CarroDB.deleteById(carro.id, function (carro) {
    console.log("Carro Deletado: " + carro);
});
