const CarroDB = require("./model/CarroDB");

function teste() {
    //promise
    let promisse = CarroDB.getCarros();
    promisse.then(function (carros) {
        console.log(JSON.stringify(carros));
    });
}

teste();