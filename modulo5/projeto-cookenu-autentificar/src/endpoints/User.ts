import {Request, Response} from "express"
import UserData from "../data/UserData"
import { MissingFields } from "../error/MissingFields"
import User from "../model/User"
import IdGenerato from "../services/IdGenetato"

class UserEndpoint{
    async create(req:Request,res:Response){
        try {
            const {nome, email, senha} = req.body
            if (!nome ||!email || !senha) {
                throw new MissingFields()
            }
            if(senha.length < 6){
                throw new Error("A senha deve conter no minimo 6 digitos")
            }

            const userData = new UserData()

            const emailAlreadyExit = await userData.getUserByEmail(email)

            if(emailAlreadyExit){
                throw new Error("Email já cadastrado")
            }
            
            const id = new IdGenerato().idGenerato()

            const user = new User(id,nome,email,senha)

            console.log(user)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({message:error.message})
        }

    }
}
export default UserEndpoint