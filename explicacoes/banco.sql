CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
INSERT INTO usuarios(nome, email, idade) VALUES(
    "Bruna Mezzomo", 
    "bruna@hotmail.com", 
    29
);
DELETE FROM usuarios WHERE nome = "Paula";

/*set para colocar o campo. Abaixo ira trocar o nome de todos os usuarios*/
UPDATE usuarios SET nome = "Nome de Teste";
/*para delimitar usar o Where*/
UPDATE usuarios SET nome = "Novo nome" WHERE nome = "Luis Silva";

/* PARA ACESSAR O DATABASE USE E O NOME DO DATABASE*/


/* Comandos SQL:
* SHOW junto com o nome para mostrar ex. SHOW DATABASES;
* CREATE , exemplo CREATE TABLE usuarios
* USE para acessar o database (colocar o nome)
* DESCRIBE para infos por exemplo do nome de uma coluna
* Tipos VARCHAR, CHAT, INT, FLOAT, etc
* INSERT INTO
* Para pesquisas SELECT * FROM usuarios;
* WHERE exemplo SELECT * FROM usuarios WHERE idade = 31;
* SELECT * FROM usuarios WHERE idade >= 18;
* DELETE FROM nomedatabela apaga toda a tabela
* UPDATE
* Asterisco significa all *
*/

