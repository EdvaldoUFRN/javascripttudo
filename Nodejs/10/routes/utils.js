//função para auxiliar o uso de async/await
const exec = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(function (err) {
        next(err);
    });
};
//exporta a função
module.exports = exec;