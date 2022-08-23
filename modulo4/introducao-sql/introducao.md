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


insert into actor(id, name, salary, birth_date, gender)
values(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
),
(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"male"
);