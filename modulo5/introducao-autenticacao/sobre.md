- Exercício 1
    
    Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 
    
    O uso dele é simples, veja abaixo:
    
    ```tsx
    import { v4 } from "uuid"
    
    const id = v4();
    
    console.log("Generated Id: ", id);
    ```
    
    a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concord que seja melhor do que usar números?* Aumenta a segurança

    b) Apartir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 

    - Exercício 2
    
    Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
    Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:
    
    ```tsx
    const userTableName = "User";
    
    const connection = knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
      },
    });
    
    const createUser = async (id: string, email: string, password: string) => {
      await connection
        .insert({
          id,
          email,
          password,
        })
        .into(userTableName);
    };
    ```
    
    a) *Explique o código acima com as suas palavras.*
    Foi feita a conexão com um banco de dados e criado uma função para criar um usuario
    b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
    
    c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.* 