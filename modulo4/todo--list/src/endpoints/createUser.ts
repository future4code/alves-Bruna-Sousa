
import { Request, Response } from "express";
import insertUser from "../data/insertUser";


export default async function createtUser(
    req: Request,
    res: Response
){
    try { 
        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ) { res.status(400).send('Preencha os campos name, nickname e email')}
        
        const id: string = Date.now() + Math.random().toString()
        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res
        .status(200)
        .send('Sucesso!')
    } catch (err) {
        res.status(400).send(err.message ||  err.sqlMessage) 
        
    }
}
    
