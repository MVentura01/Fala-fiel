var database = require("../database/config");
''
    function buscarTop3Jogadores() {
    var instrucaoSql = `
        SELECT jogador_favorito, COUNT(*) AS votos
        FROM respostaDoQuiz
        GROUP BY jogador_favorito
        ORDER BY votos DESC
        LIMIT 3;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


    function buscarIdolo() {
    var instrucaoSql = `
        SELECT idolo, COUNT(*) AS votos
        FROM respostaDoQuiz
        GROUP BY idolo
        ORDER BY votos DESC;
    `; 
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


    function maiorRival(){
        var instrucaoSql = `SELECT rival, COUNT(*) AS votos
            FROM respostaDoQuiz
            GROUP BY rival
            ORDER BY votos DESC;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }

module.exports = {
    buscarTop3Jogadores,
    buscarIdolo,
    maiorRival
}