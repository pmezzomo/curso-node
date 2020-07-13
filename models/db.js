const Sequelize = require('sequelize')
    //Conexao com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', 'Mar@1825', {
    host: "localhost", //onde esta o banco
    dialect: 'mysql'
})

//para exportar o sequelize
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}