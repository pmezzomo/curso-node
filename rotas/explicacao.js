//para chamar o express
//const express = require("express")
//const app = express()

//criar uma rota para a pagina inicial
//app.get('/', function(req, res) {
//     res.send("Seja bem-vindo ao meu app")
// })
//Criar uma nova rota para entrar em uma outra página
//app.get('/sobre', function(req, res) {
res.send("Minha página sobre")
    // })
    //Criar a rota de uma terceita pagina
    //app.get('/blog', function(req, res) {
    //  res.send("Bem-vindo ao meu blog!")
    //})

//Para criar o parametro usa-se : e precisa informar o parametro
//para testar colocar /e a informação no endereço do navegador
//app.get('/ola/:nome/:cargo', function(req, res) {
//pode usar tag html exemplo <h1>
//res.send("<h1> Ola " +req.params.nome +<h1>)
//res.send("Ola")
//no formato abaixo traz uma tabela atraves do objeto req (Mozila)
//res.send(req.params)
//})

//essa funçao precisa ser a ultima no codigo. Ela avisa o node que a aplicação esta rodando
//app.listen(8081, function() {
//coloca qlqr retorno. Msn de exemplo
//console.log("Servidor rodando na url http://localhost:8081")
//})  

//nodemon que detecta as alterações no codigo e ja atualiza o servidor
//npm install nodemon -g
//executar o programa com nodemon + nome do file no terminal