var usuarioModel = require("../models/usuarioModel");


function autenticar(req, res) {
    var nome = req.body.nomeServer
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        res.json({
                            id: resultadoAutenticar[0].id,
                            nome : nome,
                            email: email, 
                        }
                        )

                    }else if(resultadoAutenticar.length == 0){
                        res.status(403).send("Email ou senha inválido")
                    }
                }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var confirmarSenha = req.body.confirmarSenhaServer;

    if (nome == undefined || nome == "") {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined || email == "") {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined || senha == "") {
        res.status(400).send("Sua senha está undefined!");
    } else if (confirmarSenha == undefined || confirmarSenha == "") {
        res.status(400).send("A confirmação de senha está undefined!");
    } else if (senha != confirmarSenha) {
        res.status(400).send("As senhas não são iguais!");
    } else {

        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json({
                        id: resultado.insertId,
                        nome: nome,
                        email: email
                })}).catch(
                    function (erro) {
                        console.log(erro);
                        console.log(
                            "\nHouve um erro ao realizar o cadastro! Erro: ",
                            erro.sqlMessage
                        );
                        res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}