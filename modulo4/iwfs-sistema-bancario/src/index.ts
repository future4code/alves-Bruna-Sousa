import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { accounts } from './accounts';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users/creat", (req: Request, res: Response) =>{
    try{  
  
        // consultar ou alterar a base de dados
        const {nome, CPF, dataDeNascimentoAsString} = req.body

        //ajeitar data
        const [dia, mes, ano] = dataDeNascimentoAsString.split("/")
        const dataDeNascimento: Date = new Date(`${ano}-${mes}-${dia}`)
              //Validar as entradas da req
              // O usuario tem que ter mais de 18 anos 
              // Date now pega a data de agora

        const idadeEmSegundos:number = Date.now() - dataDeNascimento.getTime()   
        // convertendo
        const idadeEmAnos:number = idadeEmSegundos / 1000 / 60 / 60 / 24 / 365

        if(idadeEmAnos < 18){
            res.statusCode = 406
            throw new Error("Sua idade deve ser maior que 18 anos!")
        }

        accounts.push({
            nome,
            CPF,
            dataDeNascimento, // No postman escrever dataDeNascimentoAsString
            saldo: 0,
            extrato: []
        })
        /*bory do postman
        {
          "nome": "Bruna",
          "CPF": "090.777.222-22",
          "dataDeNascimentoAsString": "05/12/2000"
        } */
        // Valida o resultado da consulta
        // Envia a reposta
        res.status(201).send("Conta criada com sucesso!")

    }catch(error) {  /* Em caso de falha da requisição*/
      console.log(error)
      res.send(error.message)

    }

})

app.get("/users/visualizar", (req: Request, res: Response)=> {
    try {
        if(!accounts.length){ //Em caso estiver vazio
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }

        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)
        
    }

})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})