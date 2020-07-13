//como usar o sequelize para banco de dados
//precisa baixar npm install --save sequelize
/*const Sequelize = require('sequelize')
    //para conectar ao banco de dados: nome do banco, usuario, senha e host
const sequelize = new Sequelize('test', 'root', 'Mar@1825', {
    host: "localhost", //onde esta o banco
    dialect: 'mysql'
})

//para verficar se esta conectando no BD
sequelize.authenticate().then(function() {
    console.log("Conectado com sucesso!")
}).catch(function(erro) {
    console.log("Falha ao se conectar: " + erro)
})

//como criar um model. Ele é uma referencia da tabela dentro do Sequelize
//pode ser usado para criar as tabelas 
//model para postagem
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//chamar o elemento Postagem e criar a tabela
//Postagem.sync({ force: true })

//Para criar um novo registro no BD
Postagem.create({
    titulo: "Um Titulo qualquer",
    conteudo: "kkkkdfdf"
})

//mode para usuarios
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Dps de executar a primeira vez comentar para nap gerar a tabela novamente
//force é do json para garantir a criação
//Usuario.sync({ force: true })

Usuario.create({
    nome: "Paula",
    sobrenome: "Mezzomo",
    idade: 31,
    email: "pm@hotmail.com"
})*/