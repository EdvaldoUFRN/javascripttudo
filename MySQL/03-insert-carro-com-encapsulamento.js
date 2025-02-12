const CarroDB = require('./CarroDB');
var carro = {nome: "Meu carro", tipo:"esportivos"};
CarroDB.save(carro,function(carro){
    console.log("Carro salvo: "+carro.id+": "+carro.nome);
});