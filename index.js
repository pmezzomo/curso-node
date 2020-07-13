const express = require("express")
const app = express()
    //npm install --save express-handlebars
const handlebars = require('express-handlebars')
    //npm install --save body-parser
    //serve para receber informações de qlqr formulario
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config Template Engine
//main é o template da aplicação
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //Configurar o bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
//all para retornar todos os posts que esta dentro da tabela
//passar a variavel dentro da view home
//ASC para ordenar do mais novo para o recente
//o DESC ordena do mais velho para o mais novo
app.get('/', function(req, res) {
    Post.all({
        order: [
            ['id', 'DESC']
        ]
    }).then(function(posts) {
        res.render('home', { posts: posts })
    })
})
app.get('/cad', function(req, res) {
    //nome do arquivo formulario.handlebars
    //res.send('Rota de cadastro')
    res.render('./formulario')
})

//precisa ficar atento ao tipo da rota get ou post
app.post('/add', function(req, res) {
    //para pegar os dados enviados pelo formulario. EXEMPLO 1
    //res.send("Texto" + req.body.titulo + "Conteudo" + req.body.conteudo)
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        //qdo o post for criado ele redireciona para a pasta principal
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})

app.get('/deletar/:id', function(req, res) {
    //usa destroy para apagar as informações
    //informa o id para poder deletar, por isso criou-se o paramentro com id
    Post.destroy({ where: { 'id': req.params.id } }).then(function() {
        res.send("Postagem apagada com sucesso!")
    }).catch(function(erro) {
        res.send("Esta postagem não existe!")
    })
})
app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
})