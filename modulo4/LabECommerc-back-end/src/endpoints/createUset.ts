import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { userInsert, userType } from "../types";

export default async function creatUser(req:Request, res:Response) {
    try {
        const {name, email, password}:userType = req.body
        if (!name || !email || !password){
            throw new Error("O email, name e o password devem ser passados")
        }

        const userInsert: userInsert={
            id: Date.now().toString(),
            name,
            email,
            password
        }
       // console.log(userInsert)
       // Agora vou conectar com banco de dados:
       const anwser = await insertUser(userInsert)

       res.status(201).send({ message: anwser})

    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
    
}
    
