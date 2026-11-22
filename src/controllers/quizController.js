var quizModel = require("../models/quizModel");

function cadastrarResposta(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;
    var jogador_favorito = req.body.jogador_favoritoServer;
    var idolo = req.body.idoloServer;
    var rival = req.body.rivalServer;

    if (fk_usuario == undefined) {
        res.status(400).send("Usuário não cadastrado");
    } else if (jogador_favorito == undefined) {
        res.status(400).send("Selecione seu jogador favorito");
    } else if (idolo == undefined) {
        res.status(400).send("Selecione o seu maior ídolo do Corinthians");
    } else if (rival == undefined) {
        res.status(400).send("Selecione o maior rival do Corinthians");
    } else {

        quizModel.cadastrarRespostaDoQuiz(fk_usuario, jogador_favorito, idolo, rival)
            .then(
                function (resultado) {
                    res.json({
                        id: resultado.insertId,
                        jogador_favorito: jogador_favorito,
                        idolo: idolo,
                        rival: rival
                    })
                }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao cadastrar a resposta do quiz! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarResposta(req, res) {

    quizModel.buscarRespostaDoQuiz()
        .then(
            function (resultado) {
                res.json(resultado)
            }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar as respostas do quiz! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
            function verificarResposta(req, res) {
                var fk_usuario = req.params.fk_usuario;

                quizModel.verificarRespostaDoQuiz(fk_usuario)
                    .then(function (resultado) {
                        res.json({
                            respondeu: resultado[0].total > 0
                        });
                    })
                    .catch(function (erro) {
                        console.log(erro);
                        res.status(500).json(erro.sqlMessage);
                    });
            }

module.exports = {
    buscarResposta,
    cadastrarResposta,
    verificarResposta
}