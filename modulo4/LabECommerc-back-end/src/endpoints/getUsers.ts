import { Request, response, Response } from "express";
import selectUsers from "../data/selectUsers";

export default async function getUsers(req: Request, res: Response){
    try {
       const allUsers = await selectUsers()

       //Se não vim
       if(!allUsers?.length){
        throw new Error("Não tem usuario cadastrado!")
       }

       res.status(200).send(allUsers)
    } catch (error:any) {
        res.status(500).send({message:error.message})
        
    }
}