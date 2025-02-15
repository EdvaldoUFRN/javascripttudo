let express = require('express');
const router = express.Router();
const CarroDB = require('../model/CarroDB');
//GET em /carros
router.get('/', function (req, res, next) {
    CarroDB.getCarros(function (error, carros) {
        if (error) {
            console.log("Erro de SQL: " + error.message);
            return next(error);
        }
        res.json(carros);
    });
});
//GET em /carros/id
router.get('/:id(\\d+)', function (req, res) {
    let id = req.params.id;
    CarroDB.getCarroById(id, function (carro) {
        if (carro != undefined) {

            res.json(carro);
        } else {
            res.json({error: 'Nenhum carro foi encontrado!'});
        }
    });
});
//DELETE em /carros/id
router.delete('/:id(\\d+)', function (req, res) {
    let id = req.params.id;
    console.log("deletar carro " + id);
    CarroDB.deleteById(id, function (affectedRows) {
        res.json({msg: 'Carro deletado com sucesso.'});
    });
});
//GET em /carros/esportivos
router.get('/:tipo', function (req, res) {
    let tipo = req.params.tipo;
    res.send("Lista dos carros: " + tipo);
})
//POST para salvar um carro
router.post('/', function (req, res) {
    //carro enviado no formato json
    let carro = req.body;
    CarroDB.save(carro, function (carro) {
        res.json(carro);
    });
});
//PUT para atualizar um carro
router.put('/', function (req, res) {
    //carro enviado no formato json
    let carro = req.body;
    CarroDB.update(carro, function (carro) {
        res.json({msg: 'Carro atualizado com sucesso.'})
    });
});

//exportar as rotas para ser utilizado em outro arquivo
module.exports = router;