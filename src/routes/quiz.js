var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarResposta", function (req, res) {
    quizController.cadastrarResposta(req, res);
})

router.get("/buscarResposta", function (req, res) {
    quizController.buscarResposta(req, res);
});

module.exports = router;