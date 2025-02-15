const CarroDB = require("./model/CarroDB");

function teste() {
    //callback
    CarroDB.getCarros((err, carros) => {
        console.log(JSON.stringify(carros));
    });
}

teste();