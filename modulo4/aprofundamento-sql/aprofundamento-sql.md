O SQL é um banco relacional e permite realizar queires complexas mais rapidamente do que bancos não relacionais. Uma das coisas que permite isso é o fato das tabelas serem muito bem definidas e com regras bem rigidas. Só que, às vezes, a gente pode errar ao começar modelando uma tabela: confundir o tipo de alguma coluna; esquecer de representar alguma informação e outras coisas. É por isso que é possível **alterar** as regras definidas por uma tabela. 

O comando que faz isso é o `ALTER`. O comando abaixo adiciona uma coluna na tabela de Actor para representar o sabor de sorvete favorito da celebridade

```sql
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
```

Às vezes, gostaríamos de garantir que todos os dados anteriores a essa alteração tenham algum valor como padrão. Por exemplo, pense que, a partir de agora, gostaríamos de usar a tabela de Atores para guardar os diretores também; e, então, vamos adicionar um tipo: "Director" ou "NotDirector". Como ainda não temos nenhum diretor nessa tabela, seria legal que **todos os atores já salvos no banco até então** tivessem a coluna `type` com o valor "NotDirector". Para isso, indicamos um valor padrão/default:

```sql
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";
```

Leia os comandos abaixo e indique o que eles fazem. **Não** **os rode** nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

a)

```sql
ALTER TABLE Actor DROP COLUMN salary;
```
Resposta: Esta excluindo a coluna salary

b)

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Resposta: Esta atualizando gender por sex que vai receber apenas 6 caracteres

c) **

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
Resposta: Falando que o genter vai ter um varchar que recebe 255 caracteres

d) *Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*
Resposta: ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

- Exercício 2
    
    Além de criar e ler as tabelas, é muito importante que entendamos também como atualizar e deletar. Inclusive, essas 4 operações têm um nome muito famoso que vocês com certeza irão ouvir no dia a dia do trabalho: CRUD. Quando falamos que vamos fazer um CRUD, queremos dizer que vamos fazer alguma aplicação que cria (Create), lê (Read), atualiza (Update) e deleta (Delete) algum tipo de informação.
    
    No MySQL, existem mais dois operadores que nos permitiram fazer o CRUD de qualquer coisa. O primeiro deles é o `UPDATE`. A query abaixo muda o nome do ator com id `123` para `Moacyr Franco`:
    
    ```sql
    UPDATE Actor
    SET name = "Moacyr Franco"
    WHERE id = "123"
    ```
    
    a) *Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`*

    Resposta: update Actor set name="Moacyr Franco", birth_date="1910/04/04"where id = "003";
    
    b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*
    
    Resposta: Na minha tabela não existe nenhuma Juliana Paes

    c) *Escreva uma query que atualize todas as informações do ator com o id `005`*
     
      Resposta: update Actor set name="Marcos", birth_date="1910/04/23", salary=098, gender="male"  where id = "005";

    d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*

    R= Ele fala que atualizou mas não muda na tabela

    - Exercício 3
    
    Para finalizar o CRUD, vamos ver o D: `DELETE`. Esse operador permite deletar toda uma linha de uma tabela, seria como apagar um elemento dela. 
    
    Por exemplo, se quisermos apagar o ator com o nome `Tony Ramos`
    
    ```sql
    DELETE FROM Actor WHERE name = "Tony Ramos"
    ```
    
    a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*

    R:obs: rode o comando para poder deletar  e fazer update: SET SQL_SAFE_UPDATES = 0;
    DELETE FROM Actor WHERE name = "Fernanda Montenegro";
    
    b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

    R:
    DELETE FROM Actor
    WHERE
	gender = "male" AND
	salary > 1000000

    - Exercício 4
    
    O MySQL permite que façamos queries cujo resultado final é alguma manipulação em relação aos dados salvos. Essa manipulação é dada através de uma **função MySQL**. O exemplo mais clássico é a função COUNT, que permite contar a quantidade de elementos. Por exemplo, se quisermos contar todos os atores, poderíamos fazer assim:
    
    ```sql
    SELECT COUNT(*) FROM Actor
    ```
    
    Ou, então, poderíamos ver a quantidade de atrizes no nosso banco, colocando uma condição para entrar na contagem:
    
    ```sql
    SELECT COUNT(*) FROM Actor WHERE gender = "female"
    ```
    
    Para encerrar os nossos exemplos, vamos falar da função AVG ("Average" - média em inglês) que permite calcular a média de alguma das colunas dos nossos dados. Por exemplo, a query abaixo devolve a média dos salários dos atores
    
    ```sql
    SELECT AVG(salary) FROM Actor
    ```
    
    Existem outras funções, tais como: `MAX` e `MIN` que permitem determinar os valores máximos e mínimos de uma coluna.
    
    a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*

    R: SELECT MAX(salary) FROM Actor
    
    b) *Escreva uma query que pegue o menor salário das atrizes*

    R: SELECT MIN(salary) FROM Actor WHERE gender = "female"
    
    c) *Escreva uma query que pegue a quantidade de atrizes*

    R: SELECT COUNT(*) FROM Actor WHERE gender = "female"
    
    d) *Escreva uma query que pegue a soma de todos os salários*

    R: SELECT SUM(salary) FROM Actor

    - Exercício 5
    
    Para finalizar o que vimos na aula, temos que treinar as operações indicadas por `LIMIT`, `ORDER BY` e `GROUP BY`
    
    O `LIMIT`, como o próprio nome sugere, limita a quantidade de dados retornados. Se quisermos somente 3 atores da tabela:
    
    ```sql
    SELECT * FROM Actor LIMIT 3
    ```
    
    `ORDER BY` permite que ordenemos os dados dependendo de alguma coluna da tabela. Podemos dizer se queremos na ordem crescente (`ASC`) ou decrescente (`DESC`). A sintaxe é: `ORDER BY coluna ASC/DESC`. Se quisermos os atores em ordem alfabética:
    
    ```sql
    SELECT * FROM Actor ORDER BY name ASC
    ```
    
    Podemos juntar com o `LIMIT` e pegarmos os 4 primeiros atores (em ordem alfabética):
    
    ```sql
    SELECT * FROM Actor ORDER BY name ASC LIMIT 4
    ```
    
    Até pegar somente as 4 primeiras atrizes em ordem alfabética:
    
    ```sql
    SELECT * FROM Actor
    WHERE gender = 'female'
    ORDER BY name ASC
    LIMIT 4
    ```
    
    O último é um operador que permite agrupar os dados em relação a alguma coluna da tabela: `GROUP BY`. Ele normalmente é usado junto com algumas das funções que já vimos: `AVG`, `COUNT`, `SUM`, etc. A query abaixo retorna a quantidade de atores e atrizes na tabela (ou seja, em relação ao `gender`)
    
    ```sql
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender
    ```
    
    a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*

    R: SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender    
    obs: Essa query mostra a quantidade de actores femeninos e masculinos
    
    b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

    R:
    SELECT id, name FROM Actor
    ORDER BY name DESC;
    
    c) *Faça uma query que retorne todos os atores ordenados pelo salário*
    R:
    SELECT * FROM Actor
    ORDER BY salary;
    
    d) *Faça uma query que retorne os atores com os três maiores salarios*
    R:
    SELECT * FROM Actor
    ORDER BY salary DESC
    LIMIT 3;
    
    e) *Faça uma query que retorne a média de salário por gênero*
    R:
    SELECT AVG(salary), gender FROM Actor
    GROUP BY gender;

    - Exercício 6
    
    Você já pegou o padrão né? Primeiro fazemos algo guiado e depois deixamos você fazer a sós!
    
    a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 
    
    R: ALTER TABLE Filme ADD dataLimite DATE;

    
    b) *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

    R:ALTER TABLE Filme CHANGE avaliacao avaliacao FLOAT;
    
    c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
    
    d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

    R: DELETE FROM Filme WHERE id = "001" 
    obs:Ele  ainda assim mesmo depois de excluido atualizou.