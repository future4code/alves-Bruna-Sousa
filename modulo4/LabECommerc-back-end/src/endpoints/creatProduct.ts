import { Request, Response } from "express";
import { productData, productInse} from "../types";
import productInserir from "../data/insertProduct"


export default async function creatProduct(req: Request, res: Response){
    try {
        const {name, price, image_url}:productInse = req.body

        if(!name || !price || !image_url){
            throw new Error("Os valores de name, price e image_url devem ser passados");
            
        }
        const productData:productData = {
            id: Date.now().toString(),
            name,
            price,
            image_url

        }

// depois do await tem algo falttando
        const anwser = await  productInserir(productData)
        res.status(2001).send({message: anwser})


    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
}