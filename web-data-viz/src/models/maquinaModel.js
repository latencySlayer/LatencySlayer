var database = require("../database/config")

function autenticar() {
    var instrucaoSql = `
       select codigoMaquina from maquina;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
   autenticar,
};