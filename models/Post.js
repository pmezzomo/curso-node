//models é bom ter a primeira letra maiuscula no nome do arquivo
//./ para dizer q o arquivo esta na mesma pasta
const db = require('./db')
const Sequelize = require('sequelize')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//SO USA ESSA LINHA QUANDO CRIA A TABELA. DPS DEIXA COMENTADA
//Post.sync({ force: true })

//para exportar esse file para outros lugares (exports)
module.exports = Post