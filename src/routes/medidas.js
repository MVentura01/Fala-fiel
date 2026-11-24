var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarTop3Jogadores", function (req, res) {
    medidaController.buscarTop3Jogadores(req, res);
});

router.get("/buscarIdolo", function (req, res) {
    medidaController.buscarIdolo(req, res);
});

module.exports = router;