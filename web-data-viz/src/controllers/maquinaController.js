var maquinaModel = require("../models/maquinaModel");

function autenticar(req, res) {
    maquinaModel.autenticar()
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("houve um erro ao puxar dados ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    autenticar,
  };