let express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');
const exec = require('./utils');
//GET em /carros
router.get('/', exec(async (req, res, next) => {
    let carros = await CarroDB.getCarros();
    res.json(carros);
}));


//GET em /carros/id
router.get('/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let carro = await CarroDB.getCarroById(id);
    res.json(carro);
}));
//DELETE em /carros/id
router.delete('/:id(\\d+)', exec(async (req, res, next) => {
    let id = req.params.id;
    let affectedRows = await CarroDB.deleteById(id);
    res.json({msg: affectedRows > 0 ? 'Carro deletado com sucesso.' : "Nenhum carro excluído."});
}));
//GET em /carros/esportivos
router.get('/:tipo', exec(async (req, res, next) => {
    let tipo = req.params.tipo;
    let carros = await CarroDB.getCarrosByTipo(tipo);
    res.json(carros);
}));
//POST para salvar um carro
router.post('/', exec(async (req, res, next) => {
    //carro enviado no formato json
    let carro = await CarroDB.save(req.body);
    res.json(carro);
}));
//PUT para atualizar um carro
router.put('/', exec(async (req, res, next) => {
    //carro enviado no formato json
    let carro = await CarroDB.update(req.body);
    res.json({msg: 'Carro atualizado com sucesso.'});
}));

//exportar as rotas para ser utilizado em outro arquivo
module.exports = router;