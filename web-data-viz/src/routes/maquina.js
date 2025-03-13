var express = require("express");
var router = express.Router();

var maquinaController = require("../controllers/maquinaController");

router.post("/cadastrar", function (req, res) {
    maquinaController.cadastrar(req, res);
})

router.post("/pesquisa", function (req, res) {
    maquinaController.pesquisa(req, res);
})

router.get("/maquinas", function (req, res) {
    maquinaController.autenticar(req, res);
});

module.exports = router;