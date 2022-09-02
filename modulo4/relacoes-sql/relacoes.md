1a) O papel da chave estrangeira é manter uma referência a um registro presente em outra tabela. 

b)INSERT INTO Rating (id, comentario, avaliacao, filme_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);  
c)
d)ALTER TABLE Filme DROP COLUMN rating;

2a)Está tabela está relacionando a tabela filmes e atores para criar o elenco.
b) INSERT INTO FilmeAtores(filme_id, ator_id)
VALUES(
		"004",
    "001"
)

3)a) 
b)SELECT Filmes.id, nome, avaliacao FROM Filmes
INNER JOIN Rating
ON Filmes.id = Rating.Filmes_id;

