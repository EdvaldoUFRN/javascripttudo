const CarroDB = require('./CarroDB');

var carro = {
    id: 31,
    nome: "Meu Carro Update",
    tipo: "esportivos"
};
CarroDB.update(carro, function (carro) {
    console.log("Carro Atualizado: " + carro.id + ": " + carro.nome);
})