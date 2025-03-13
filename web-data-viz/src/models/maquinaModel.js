var database = require("../database/config")

function autenticar() {
    var instrucaoSql = `
       select codigoMaquina, dataRegistro from maquina;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(codigo, ram, disco, cpu) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():")
   
    var instrucaoSql = `INSERT INTO maquina (codigoMaquina, modeloRam, modeloCpu, modeloDisk) VALUES ('${codigo}', '${ram}', '${disco}', '${cpu}');`;
    console.log( instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisa(ipt_pesquisa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():")
   
    var instrucaoSql = `select * from maquina where codigoMaquina like '${ipt_pesquisa}%';`;
    console.log( instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
   autenticar,
   cadastrar,
   pesquisa
};