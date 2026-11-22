var database = require("../database/config");

    function cadastrarRespostaDoQuiz(fk_usuario, jogador_favorito, idolo, rival){
         var instrucaoSql =`
            INSERT INTO respostaDoQuiz (fk_usuario, jogador_favorito, idolo, rival)
            VALUES (${fk_usuario}, '${jogador_favorito}', '${idolo}', '${rival}');
        `
        
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
            return database.executar(instrucaoSql);
    }

        function buscarRespostaDoQuiz(){
            var instrucaoSql = `
                SELECT jogador_favorito, COUNT(*) AS total
                FROM respostaDoQuiz
                GROUP BY jogador_favorito
                ORDER BY total DESC
                LIMIT 3;
            `
            console.log("Executando a instrução SQL: \n" + instrucaoSql);
                return database.executar(instrucaoSql);
        }
        function verificarRespostaDoQuiz(fk_usuario) {
            var instrucaoSql = `
                SELECT COUNT(*) AS total
                FROM respostaDoQuiz
                WHERE fk_usuario = ${fk_usuario};
            `;

            return database.executar(instrucaoSql);
        }



module.exports = {
    cadastrarRespostaDoQuiz,
    buscarRespostaDoQuiz,
    verificarRespostaDoQuiz
}