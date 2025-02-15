const CarroDB = require('./models/CarroDB)');

async function teste() {
    let carros = await CarroDB.getCarros();
    console.log(JSON.stringify(carros));
}

teste();