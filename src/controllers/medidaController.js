var medidaModel = require("../models/medidaModel");


function buscarTop3Jogadores(req, res) {

   medidaModel.buscarTop3Jogadores()
        .then(
            function (resultado) {
                res.status(200).json(resultado)
            }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar as respostas do quiz! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarIdolo(req, res){
    medidaModel.buscarIdolo()
        .then(
            function (resultado) {
                res.status(200).json(resultado)
            }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar as respostas do quiz! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarRival(req, res){
    medidaModel.buscarRival()
        .then(
            function (resultado) {
                res.status(200).json(resultado)
            }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar as respostas do quiz! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function total_participantes(req, res){
    medidaModel.total_participantes()
        .then(
            function (resultado) {
                res.status(200).json(resultado)
            }).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar as respostas do quiz! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    buscarTop3Jogadores,
    buscarIdolo,
    buscarRival,
    total_participantes
}