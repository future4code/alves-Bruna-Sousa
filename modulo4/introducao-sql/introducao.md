CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

*a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.*

#### VARCHAR(25) Significa quantidade maxima de caracteres
#### DATE representa uma data
#### PRIMARY KEY: indentifica um criador sempre ter que ter um identificador.
##### NOTE NULL: O campo não pode ficar vazio


*b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.*

#### Um retorna o nome e o outro retorna a tabela

*c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.*

##### Mostra uma estrutura de uma tabela

2) a-
R:
insert into actor(id, name, salary, birth_date, gender)
values(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"male"
);

b) R: Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
Entrada duplicada '002' para 'PRIMARY' chave
Significa que a entrada foi duplicada.

c) R: Error Code: 1136. Column count doesn't match value count at row 1
Contagem de colunas não corresponde à contagem de valor na linha 1

d) R: Error Code: 1364. Field 'name' doesn't have a default value
O 'nome' de campo não tem um valor padrão

e) R: Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
O dado do campo birth_date precisa ser uma string no formato "YYYY-MM-DD"
Y de year (ano), M de month (mês) e D de day (dia)

f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Bruna Vitória",
  156489,
  "2000-05-20", 
  "femu"
);

3)
a- Escreva uma query que retorne todas as informações das atrizes:
R: SELECT * FROM Actor WHERE gender = "female";
b- Escreva uma query que retorne o salário do ator com o nome Tony Ramos:
R:SELECT salary from Actor WHERE name = "Tony Ramos";
c- Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
R:SELECT gender from Actor WHERE name = "Invalid"; Ela dá certo mais não retorna nada.
d- Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
R:SELECT id, name, salary from Actor WHERE salary < 500000;
e- 
R: Error Code: 1054. Unknown column 'nome' in 'field list'
O nome nome não existe mas sim name.
código certo: SELECT id, name from Actor WHERE id = "002"

4)Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:

- cujos nomes começam com "A" ou "J"; e
- cujos salários são maiores do que R$300.000

Para fazer a primeira parte, vamos usar o comparador `LIKE`, que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: `LIKE "A%"` porque `%` indica uma string genérica. O operador "ou" é indicado por `OR`. Assim, a primeira condição é indicada por: `WHERE name LIKE "A%" OR name LIKE "J%"`. 

Já a segunda parte é simples: `salary > 300000`. O que pode confundir é o operador lógico "e" (`AND`). A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):

```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

Assim como o `LIKE` existem os operadores: 

- `BETWEEN`: permite verificar se um valor está entre dois: `BETWEEN valor1 AND valor2`.
- `NOT`: que indica uma negação de comparação. Pode ser usado antes de outros operadores como: `NOT LIKE`, `NOT BETWEEN`

a- Explique com as suas palavras a query acima:
R: Selecione tudo da tabela Actor, onde o nome comece com A ou J, e tenha o salário maior que 300000.
b-  Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
R: 
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

c- Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
R:
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%");
D-  Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
R:
WHERE (
	(name LIKE "%a%" OR name LIKE "%A%") OR (name LIKE "%g%" OR name LIKE "%G%")
)
AND salary BETWEEN 350000 AND 900000;

5-Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

a- Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.
R: CREATE TABLE Filme (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL,
    sipnose TEXT NOT NULL,
    dataLançamento DATE NOT NULL,
    avaliacao TINYINT NOT NULL
);
b-
R: INSERT INTO Filme (id, titulo, sipnose, dataLançamento, avaliacao)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
c- 
R: INSERT INTO Filme (id, titulo, sipnose, dataLançamento, avaliacao)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
d-
R: INSERT INTO Filme (id, titulo, sipnose, dataLançamento, avaliacao)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);
e-
R:
INSERT INTO Filme (id, titulo, sipnose, dataLançamento, avaliacao)
VALUES(
  "004",
  "Teste",
  "Sinopse de teste",
  "2021-05-24",
  5
);
6-Escreva uma query que:
a) Retorne o id, título e avaliação a partir de um id específico;
R:
SELECT id, titulo, avaliacao FROM Filme
WHERE id = "001";
b) Retorne um filme a partir de um nome específico;
R:
SELECT * FROM Filme
WHERE Titulo = "Teste";
c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
R:
SELECT id, titulo, sipnose FROM Filme
Where avaliacao < 7;

7) 
a)Retorna um filme cujo título contenha a palavra vida
R: 
SELECT * FROM Filme
WHERE titulo like "%vida%";
b)  Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
R:
SELECT * FROM Filme
WHERE titulo like "%vida%" OR sipnose like "%vida%";
c) Procure por todos os filmes que já tenham lançado
R:
SELECT * FROM Filme
WHERE dataLançamento <= CURRENT_DATE();
d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 
R:
SELECT * FROM Filme
WHERE (
  dataLançamento <= CURRENT_DATE() AND
  (titulo like "%vida%" OR sipnose like "%vida%") AND
  avaliacao > 7
  );
